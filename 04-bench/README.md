# 04-bench — Vite 7 → 8 のビルド時間を実測する

[`02b-vite7`](../02b-vite7/README.md) の実測（~180ms vs ~200ms）は、ソースが 10 モジュール・
97 行しかないため **Vite 8 のほうが遅く見える**。プロセス起動のオーバーヘッドが支配的で、
Rolldown の並列バンドルが仕事をする前にビルドが終わってしまうから。

ここでは Rolldown が実際に効いてくる規模のプロジェクトを使い、**同じ結論が規模を変えると
逆転すること**を実測する。

## 構成

```
04-bench/
  generate.mjs     app/ を決定論的に生成するスクリプト（コミットしてある）
  app/              コードの実体はここだけ（コミットしてある）
    index.html
    src/**
  vite7/            vite 7.3.6。index.html と src は ../app への symlink
  vite8/            vite 8.3.0。同上
```

**コードの実体は 1 つ**（`app/`）。`vite7/` と `vite8/` は symlink でそれを指すだけなので、
「ソースが同じであること」を diff で確認する必要がない — 物理的に同じファイルを指している。

再生成したい場合:

```sh
node generate.mjs                 # 既定 N=3750 で app/ を作り直す
node generate.mjs --modules 1000  # 規模を変えて試したいとき
```

同じ引数なら常にバイト一致の出力になる（PRNG のシード固定）。

## なぜ symlink なのか、`preserveSymlinks: true` が要る理由

各 `vite.config.js` に `resolve.preserveSymlinks: true` を入れてある。これがないと Vite は
symlink を realpath（`04-bench/app/src/...`）に解決してしまい、モジュール ID が
プロジェクト root の外に出てチャンク命名などの挙動が変わる。`true` にすると、
物理的にそこにファイルが置いてある場合と完全に同じ挙動になる。両方の config に
**同じ値**で入っているので、7 対 8 の比較条件は崩れていない。

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

# 2. 依存をインストール
cd ~/bench/vite7 && npm ci
cd ~/bench/vite8 && npm ci

# 3. キャッシュを消してビルド（各 3 回、初回は fs キャッシュ / JIT ウォームアップの影響を
#    受けるので捨てて、残り 2 回の値を見る）
rm -rf dist node_modules/.vite && npm run build
```

`vite` 自身が出す `✓ built in Xs` を読む。専用の計測スクリプトは使わない。

## 実測結果（2026-09-15、このマシン: WSL2 / 16 コア / 24GB / Node 24.19、Linux ネイティブ FS）

N=3750（leaf 3000 + component 3750 = **6,876 モジュール**、`sourcemap: true`）:

| | Vite 7.3.6（Rollup） | Vite 8.3.0（Rolldown） |
|---|---|---|
| ビルド時間（3 回中央値） | **~29.0 s** | **~1.4 s** |
| modules transformed | 6,876 | 6,877 |
| チャンク数（`dist/assets/*.js`） | 2,225 | 2,225 |
| dist サイズ | 26 MB | 25 MB |
| `node_modules` サイズ | 21 MB | 34 MB |

**約 20 倍。** チャンク数が完全に一致しているので「違う量の仕事」を比べているわけではない
（chunk 分割が非対称だとこの比較は成立しない — `manualChunks` を入れなかったのはこのため）。
dist サイズも両者ほぼ同じで、tree-shaking で片方だけ極端に削れているということもない。

02b-vite7 の ~180ms/~200ms と矛盾しない。むしろ両方合わせて教材として正しい：
**「小さいプロジェクトでは差が出ない（起動オーバーヘッドが支配的）、規模が乗ると Rust 実装が
効いてくる」**という規模依存の話そのものが、Vite 7→8 の変更点の実務上の意味。

## 揃えられない差分（README として明記しておく）

- **`build.minify`**: v7 は既定 `esbuild`、v8 は既定 `oxc`。**共通化できない**
  （v7 に oxc は無く、v8 に esbuild は無い）。`terser` を「公平な共通選択肢」として使うのは
  論外（JS 実装なので両方の数字が terser の遅さで塗り潰される）。上の実測はこの既定差込み。
- **CSS**: v7 は esbuild、v8 は lightningcss で minify する
  （[SLIDES-vite7to8.md](../SLIDES-vite7to8.md) 参照）。CSS ファイルを増やすとバンドラ本体の差に
  この差が混入するため、`app/src/styles/` は 20 ファイルのみに抑えてある
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

## 既知の制約

- symlink を使っているので、Windows 上で symlink サポートを有効にせず clone すると壊れる
  （WSL / macOS / Linux ネイティブなら問題ない）。
- `vite` のバージョンは `package.json` で `^` を付けず完全固定してある
  （`7.3.6` / `8.3.0`）。`npm i` で黙って更新すると数字が変わるため、更新する場合は
  再度この README の数字も取り直すこと。

## 出力の目視確認

```sh
cd ~/bench/vite7 && npm run preview   # http://localhost:5373/
cd ~/bench/vite8 && npm run preview   # http://localhost:5473/
```

ページのボタンを押すと動的 import でそのページのコンポーネントが読み込まれ、
`lib/` の関数を実際に呼んで DOM に書き込む（tree-shaking で消えていないことの目視確認）。
