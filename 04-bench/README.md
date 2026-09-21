# 04-bench — Vite 7 → 8 のビルド時間を実測する

[`02b-vite7`](../02b-vite7/README.md) の実測（~180ms vs ~200ms）は、ソースが 10 モジュール・
97 行しかないため **Vite 8 のほうが遅く見える**。プロセス起動のオーバーヘッドが支配的で、
Rolldown の並列バンドルが仕事をする前にビルドが終わってしまうから。

ここでは Rolldown が実際に効いてくる規模のプロジェクトを使い、**同じ結論が規模を変えると
逆転すること**を実測する。さらに、**コード分割あり（動的 import）** と
**コード分割なし（静的 import・単一バンドル）** の両方を用意し、
「よくある構成」でどちらでも差が出ることを確認する。

## 構成

```
04-bench/
  generate.mjs      app/ と app-static/ を決定論的に生成するスクリプト（コミットしてある）
  app/               コードの実体（コミットしてある）。40 ページをフラットに動的 import する
    index.html
    src/**
  app-static/        コードの実体（コミットしてある）。動的 import なし・全部静的 import で単一バンドル
    index.html
    src/**
  vite7/             vite 7.3.6。index.html と src は ../app への symlink
  vite8/             vite 8.3.0。同上
  vite7-static/      vite 7.3.6。index.html と src は ../app-static への symlink
  vite8-static/      vite 8.3.0。同上
```

**コードの実体はバリアントごとに 1 つ**（`app/` と `app-static/`）。`vite7/` `vite8/` /
`vite7-static/` `vite8-static/` は symlink でそれを指すだけなので、「ソースが同じであること」を
diff で確認する必要がない — 物理的に同じファイルを指している。

`app/` と `app-static/` は **`lib/` `components/` `pages/` `styles/` が完全にバイト一致**
（同じ PRNG 呼び出し順で生成しているため）。違うのは `main.js`（40 ページを `import()` で
遅延ロードするか、全部 `import` で先読みして 1 チャンクに束ねるか）と `index.html` の
`<title>` だけ。**コード量・内容を揃えたまま「分割の仕方」だけを変えた比較**になっている。

再生成したい場合:

```sh
node generate.mjs                                # 既定 N=3750 で app/（動的 import 版）を作り直す
node generate.mjs --dynamic false --out app-static  # app-static/（静的・単一バンドル版）を作り直す
node generate.mjs --modules 1000                 # 規模を変えて試したいとき
```

同じ引数なら常にバイト一致の出力になる（PRNG のシード固定）。

## なぜ symlink なのか、`preserveSymlinks: true` が要る理由

各 `vite.config.js` に `resolve.preserveSymlinks: true` を入れてある。これがないと Vite は
symlink を realpath（`04-bench/app/src/...`）に解決してしまい、モジュール ID が
プロジェクト root の外に出てチャンク命名などの挙動が変わる。`true` にすると、
物理的にそこにファイルが置いてある場合と完全に同じ挙動になる。4 つの config すべてに
**同じ値**で入っているので、比較条件は崩れていない。

## 【重要】計測は Linux ネイティブの FS で行う（このリポジトリは 9p 上にある）

```sh
$ df -hT .
C:\   9p   ...     ← Windows の C: ドライブを WSL から見ている
```

9p はファイル I/O が Linux ネイティブより大幅に遅い。数千モジュールを 9p 上でビルドすると
**7 も 8 も I/O 待ちが乗り、バンドラそのものの差が薄まる**（実測: Vite 8 ですら 9p 上では
23 秒かかったが、同じソースを Linux ネイティブにコピーすると 1.4 秒だった）。

```sh
# 1. symlink を保ったまま Linux ネイティブ側へコピー
cp -a 04-bench ~/bench

# 2. 依存をインストール（4 プロジェクト分）
for d in vite7 vite8 vite7-static vite8-static; do
  (cd ~/bench/$d && npm ci)
done

# 3. キャッシュを消してビルド（各 3 回、初回は fs キャッシュ / JIT ウォームアップの影響を
#    受けるので捨てて、残り 2 回の値を見る）
rm -rf dist node_modules/.vite && npm run build
```

`vite` 自身が出す `✓ built in Xs` を読む。専用の計測スクリプトは使わない。

## 実測結果（2026-09-16、このマシン: WSL2 / 16 コア / 24GB / Node 24.19、Linux ネイティブ FS）

N=3750（leaf 3000 + component 3750、`sourcemap: true`）。lib/components/pages は
2 バリアントで完全に同じ内容。

### コード分割あり（`app/` — 40 ページをフラットに動的 import）

| | Vite 7.3.6（Rollup） | Vite 8.3.0（Rolldown） |
|---|---|---|
| ビルド時間（3 回中央値） | **~29.0 s** | **~1.4 s** |
| modules transformed | 6,876 | 6,877 |
| チャンク数（`dist/assets/*.js`） | 2,225 | 2,225 |
| dist サイズ | 26 MB | 25 MB |

**約 20 倍。**

### コード分割なし（`app-static/` — 40 ページを全部静的 import、単一バンドル）

| | Vite 7.3.6（Rollup） | Vite 8.3.0（Rolldown） |
|---|---|---|
| ビルド時間（3 回中央値） | **~29.0 s** | **~0.6 s** |
| modules transformed | 6,875 | 6,876 |
| チャンク数（`dist/assets/*.js`） | 1 | 1 |
| dist サイズ | 8.5 MB | 8.1 MB |

**約 48 倍。**

### 読み方

- **Vite 7（Rollup）のビルド時間はコード分割の有無でほぼ変わらない**（~29.0s のまま）。
  同じ 6,875〜6,876 モジュールを処理する以上、支配的なのはグラフ構築 / tree-shaking の
  不動点ループであって、チャンクの emit ではない。
- **Vite 8（Rolldown）はコード分割なしのほうがさらに速い**（1.4s → 0.6s）。
  チャンク数が減ることで Rust 側の並列 emit のオーバーヘッドがさらに小さくなる。
- 結果として、**「コード分割なしの、よくある単純な SPA / ライブラリバンドル」構成のほうが
  7→8 の倍率がむしろ大きく出る**（20倍 → 48倍）。動的 import を多用した構成は
  Rollup 側の負荷は変わらないまま Rolldown 側の勝ち幅をわずかに削る、という関係になっている。

チャンク数はどちらのバリアントでも 7 と 8 で完全に一致しているので、「違う量の仕事」を
比べているわけではない（chunk 分割が非対称だとこの比較は成立しない —
`manualChunks` を入れなかったのはこのため）。dist サイズも両者ほぼ同じで、
tree-shaking で片方だけ極端に削れているということもない。

02b-vite7 の ~180ms/~200ms と矛盾しない。むしろ両方合わせて教材として正しい：
**「小さいプロジェクトでは差が出ない（起動オーバーヘッドが支配的）、規模が乗ると Rust 実装が
効いてくる」**という規模依存の話そのものが、Vite 7→8 の変更点の実務上の意味。

## 揃えられない差分（README として明記しておく）

- **`build.minify`**: v7 は既定 `esbuild`、v8 は既定 `oxc`。**共通化できない**
  （v7 に oxc は無く、v8 に esbuild は無い）。`terser` を「公平な共通選択肢」として使うのは
  論外（JS 実装なので両方の数字が terser の遅さで塗り潰される）。上の実測はこの既定差込み。
- **CSS**: v7 は esbuild、v8 は lightningcss で minify する
  （[SLIDES-vite7to8.md](../SLIDES-vite7to8.md) 参照）。CSS ファイルを増やすとバンドラ本体の差に
  この差が混入するため、`styles/` は 20 ファイルのみに抑えてある
  （ビルド時間に占める割合は無視できるレベル）。
- **依存ゼロ**: `nanoid` 等の npm 依存を意図的に入れていない。node_modules の依存は
  CJS/ESM interop を伴い、そこは Rollup と Rolldown で扱いが違うため。

## sourcemap の影響

Rollup の sourcemap 経路（magic-string でモジュールごとにデコード → `collapseSourcemaps` で
Vite プラグイン層のマップと合成 → `@jridgewell/sourcemap-codec` でエンコード → minify 後の
マップと再マージ）は、Rollup の中でも特に JS 実装が重い部分。Rolldown はここを Rust でやる。
つまり `sourcemap: true` は Vite 8 を実際より有利に見せている **可能性がある**設定である。
ただしこれは非現実的な設定ではなく、実務で普通に使う値でもある。
`sourcemap: false` での追試は今後の TODO。

## Vue 版（コード分割なし）— SFC コンパイルのオーバーヘッドを測る

上のプレーン JS の実測は「素の JS を Rollup / Rolldown が束ねるだけ」の場合の話。
実務でよくあるのは Vue や React の SFC / JSX で、この場合バンドラ本体の前に
**フレームワーク側のコンパイラ**（Vue なら `@vitejs/plugin-vue` の template → render 関数変換、
scoped CSS の書き換え）が挟まる。ここが 7→8 でどう変わるかはプレーン JS の実測だけでは分からない。

`generate-vue.mjs` は `generate.mjs` と同じ考え方で、**コード分割なし・静的 import のみ・
単一バンドル**の Vue 3 プロジェクトを `app-vue-static/` に生成する（動的 import 版は作っていない）。

```
04-bench/
  generate-vue.mjs      app-vue-static/ を決定論的に生成するスクリプト
  app-vue-static/        コードの実体（node で生成するまで存在しない）
    index.html
    src/
      lib/               葉モジュール。プレーン JS のまま（Vue 非依存の純関数）
      components/*.vue   <script setup> + <template> + <style scoped> の葉コンポーネント
      pages/*.vue         40 ページ分。担当コンポーネントを静的 import してテンプレートに並べる
      App.vue             40 ページを全部静的 import。ボタンで表示切り替え（import() は使わない）
      main.js / style.css
  vite7-vue-static/      vite 7.3.6 + @vitejs/plugin-vue 6.0.9。index.html と src は
                          ../app-vue-static への symlink（要生成・要手動作成）
  vite8-vue-static/      vite 8.3.0 + @vitejs/plugin-vue 6.0.9。同上
```

`lib/` の葉モジュールはプレーン JS 版と同じ生成ロジック（Vue と無関係の純関数）。
違うのは `components/` と `pages/` が `.js` ではなく `.vue` になっている点、CSS を
外部ファイルに切り出さず**コンポーネントごとの `<style scoped>` に埋め込んでいる**点
（scoped CSS の書き換えコストも計測対象に含めたいので、プレーン JS 版のように
「CSS の影響を 2% 未満に抑える」設計にはしていない — Vue アプリの実態に近づける方を優先した）。

### 【注意】このセッションでは生成・計測を実行していない

このスクリプトはコードとして書いただけで、実際に `node` で走らせてビルド時間を測るところまでは
やっていない（作業環境に node/npm がなかったため）。したがって：

- `app-vue-static/` はまだ存在しない（下のセットアップ手順で生成する）
- `--modules` の既定値 `1200` は未検証の当て推量（SFC は 1 ファイルあたりプレーン JS より
  コンパイルが重いので、`generate.mjs` の `N=3750` をそのまま使うと Vite 7 が 30s を
  大きく超える可能性が高いと考えて、ざっくり 1/3 にしてあるだけ）
- 下の「実測結果」は空欄。実際に計測した数字が出たら、この README と
  [SLIDES-vite7to8.md](../SLIDES-vite7to8.md) の該当箇所を実測値で埋めること

### セットアップ（WSL / macOS / Linux ネイティブで実行。9p 越しだと数字が壊れるのは上と同じ）

```sh
# 1. Vue 版のソースを生成（既定 --modules 1200。app/ app-static/ と同じく決定論的）
node 04-bench/generate-vue.mjs

# 2. symlink を作る（vite7/ vite7-static/ などと同じ方式）
cd 04-bench
ln -sf ../app-vue-static/index.html vite7-vue-static/index.html
ln -sf ../app-vue-static/src        vite7-vue-static/src
ln -sf ../app-vue-static/index.html vite8-vue-static/index.html
ln -sf ../app-vue-static/src        vite8-vue-static/src

# 3. 依存インストール
for d in vite7-vue-static vite8-vue-static; do
  (cd $d && npm install)
done

# 4. まず vite7-vue-static でビルドしてみて、~30s から大きくずれていたら
#    --modules を上下させて generate-vue.mjs を再生成 → 1〜3 をやり直す
cd vite7-vue-static && rm -rf dist node_modules/.vite && npm run build
```

30s 前後に合わせられたら、プレーン JS 版と同じ手順（3 回ビルドして中央値、初回はキャッシュ /
JIT ウォームアップの影響を受けるので捨てる）で `vite8-vue-static` も計測し、下の表を埋める。

### 実測結果（未計測 — キャリブレーション待ち）

| | Vite 7.3.6（Rollup + @vitejs/plugin-vue） | Vite 8.3.0（Rolldown + @vitejs/plugin-vue） | 倍率 |
|---|---|---|---|
| ビルド時間（3 回中央値） | — | — | — |
| modules transformed | — | — | |
| チャンク数 | — | — | |
| dist サイズ | — | — | |

計測条件（埋める側）: `--modules` の最終値 / マシンスペック / OS・FS / Node バージョン。

### この版で新しく混入する差分（プレーン JS 版の「揃えられない差分」に追加で）

- **`@vitejs/plugin-vue` 自体は 7/8 共通のバージョン（6.0.9）を使うので、プラグイン側の
  実装差は無い**。差が出るとしたら、プラグインが内部で使う CSS 変換（v7 は esbuild、
  v8 は lightningcss。→ [SLIDES-vite7to8.md](../SLIDES-vite7to8.md) 3-1）と、
  バンドラ本体（Rollup / Rolldown）が SFC コンパイル後の JS/CSS をどう束ねるか、の 2 点
- 1 つの `.vue` ファイルは内部で script / template / style の複数の仮想モジュールに
  分解されるため、`modules transformed` の数はプレーン JS 版と単純比較できない
  （component 1 個 = 1 モジュールではない）

## 既知の制約

- symlink を使っているので、Windows 上で symlink サポートを有効にせず clone すると壊れる
  （WSL / macOS / Linux ネイティブなら問題ない）。
- `vite` のバージョンは `package.json` で `^` を付けず完全固定してある
  （`7.3.6` / `8.3.0`）。`npm i` で黙って更新すると数字が変わるため、更新する場合は
  再度この README の数字も取り直すこと。

## 出力の目視確認

```sh
cd ~/bench/vite7         && npm run preview   # http://localhost:5373/
cd ~/bench/vite8         && npm run preview   # http://localhost:5473/
cd ~/bench/vite7-static  && npm run preview   # http://localhost:5374/
cd ~/bench/vite8-static  && npm run preview   # http://localhost:5474/
cd ~/bench/vite7-vue-static && npm run preview   # http://localhost:5375/（要セットアップ、上のVue版参照）
cd ~/bench/vite8-vue-static && npm run preview   # http://localhost:5475/（要セットアップ、上のVue版参照）
```

ページのボタンを押すと（動的 import 版なら import で遅延ロードしてから、静的版なら即座に）
そのページのコンポーネントが `lib/` の関数を実際に呼んで DOM に書き込む
（tree-shaking で消えていないことの目視確認）。
