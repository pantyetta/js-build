# Vite 7 → 8 を起点とした JS ビルドの解説

> **この Markdown が正。** `SLIDES-vite7to8.html` は旧構成のままなので、再生成が必要（HTML にしかない「持ち帰る2点」「よくあるエラーと原因」は未反映）。

> `## タイトル` = 1スライド ／ `<!-- 📊 図版 -->` = そのスライドに図を入れる指示（独立スライドではない）。

> スライド番号は `パート-通番`（例 `5-3` ＝ パート5 の3枚目）。本文中の `→ 5-3` はこの番号を指す。

## Vite 7 → 8 を起点とした JS ビルドの解説

Vite 8 のリリースにともなう Vite 7 との差分を起点として、JS ビルドの背景を整理する。

## 構成

| パート | 内容 |
|---|---|
| **1 · Vite とは** | vite の紹介、ツールの階層、この後使う言葉 |
| **2 · Vite 7 の仕組み** | 開発サーバーと本番ビルドの二層構造（esbuild / Rollup）、HMR |
| **3 · Vite 7 → 8 の変更点** | 内部エンジンの置き換え、速くなる理由、実測、更新時の確認事項 |
| **4 · なぜビルドが必要か** | モジュールの歴史、バンドラの成り立ち |
| **5 · ビルドの5工程** | Resolve / Load / Transform / Optimize / Emit |
| **6 · バンドラの実装** | 同じ工程を webpack / Rollup / Rolldown がどう実装しているか |
| **7 · まとめ** | 用語の整理、5工程で振り返る、確認事項 |
| **付録** | 5工程ごとのツール別の担当と設定（Vite / webpack / esbuild） |

パート1〜3 で Vite の動きと 7 → 8 の変更を具体的に確認し、パート4〜6 で「なぜそうなるのか」を掘り下げる。

---

## パート1 · Vite とは

## 1-1. Vite とは

開発サーバーと本番ビルド環境をまとめた、フロントエンドの開発ツール。
2020年4月が初期リリースの割と新しいツール。現在の最新は Vite 8（2026年3月リリース）。
React / Vue / Svelte など主要なフレームワークに対応し、Vue / Svelte / Astro / Remix などでは既定のビルドツールになっている（Next.js は別系統で Turbopack / webpack を使う）。

特徴

- 開発時とビルド時で動作が変わることで、それぞれ最適化されている。
- Vite 自身がビルドを行うのではなくて、内部のバンドラをまとめている。

| コマンド | 内容 |
|---|---|
| npm run dev | 開発サーバーを起動する（ソースを編集しながら動作を確認） |
| npm run build | 本番用のファイルを `dist/` に生成する |
| npm run preview | 生成した本番ファイルをローカルで確認する |

## 1-2. ツールの階層 — Vite と webpack は同じ層の競合ではない

このあと十数個のツール名が出てくるが、**全部が横並びの選択肢ではない**。層が違う。

<!-- 📊 図版: ツールの階層。フレームワーク／開発ツール一式／バンドラ／トランスパイラ／minifier の5層に、各ツールを配置した図 -->

```
フレームワーク    Next.js / Nuxt / SvelteKit / Astro     ルーティングや SSR まで面倒を見る
─────────────────────────────────────────────────────
開発ツール一式    Vite / Parcel                          dev サーバー + HMR + 設定済みバンドラ
─────────────────────────────────────────────────────
バンドラ          webpack / Rollup / Rolldown /          依存グラフを作って束ねる
                  esbuild / Rspack / Turbopack
─────────────────────────────────────────────────────
トランスパイラ    JS : Babel / SWC / tsc / esbuild / Oxc  1ファイルの構文変換
                  CSS: lightningcss / postcss
─────────────────────────────────────────────────────
minifier          terser / esbuild / oxc-minify /        縮める
                  lightningcss
```

- **Vite は「開発ツール一式」の層** — 自分ではバンドルせず、下の層を組み合わせて使う。だから「Vite と webpack のどちらを選ぶか」という問いは層がずれている（webpack と比べるなら Rollup / Rolldown）
- **esbuild が2箇所に出てくる** — esbuild はトランスパイラでもバンドラでもある。Vite 7 が「変換は esbuild、本番バンドルは Rollup」という組み方をしていたのはこのため
- **lightningcss も同じ**で、CSS のトランスパイラ ＋ minifier を1つでこなす（→ 3-1）

## 1-3. この後使う言葉（最小限）

パート2 から先で前提として使う語。**ここでは輪郭だけ**。中身はそれぞれ後半で扱う。

| 語 | ここでの理解 | 詳しく |
|---|---|---|
| モジュール | `import` / `export` で他と繋がる、スコープが閉じた JS ファイル1つ | パート4 |
| ESModule（ESM） | 言語仕様として決まったモジュールの書き方。**ブラウザがそのまま理解できる** | 4-4 |
| 依存グラフ | エントリから `import` を辿って得られる、モジュールの繋がり全体 | 5-1 |
| バンドル | 依存グラフをもとに、複数モジュールを1本のファイルに束ねること | 5-4 |
| 事前バンドル | Vite が `node_modules` の依存だけを先に束ねておく処理 | 2-2 |
| tree shaking | どこからも使われていないコードを落とすこと | 5-4 / 6-3 |
| minify | 変数名短縮・空白削除で縮めること。動作は変えない | 5-4 |
| code splitting | 出力を複数ファイルに分けること | 5-5 |

---

## パート2 · Vite 7 の仕組み

## 2-1. 開発サーバーと本番ビルドの二層構造

- **開発サーバー**（`vite`） — **ソースコードをバンドルしない。**　ブラウザのネイティブ ESModule をそのまま使い、必要な分だけその場で変換。事前バンドルは **esbuild** が担当。
- **本番ビルド**（`vite build`） — **全てバンドルする。**　依存グラフを作って tree shaking / minify / code splitting。バンドル処理は **Rollup** が担当。

**なぜ本番だけバンドルするのか** — dev と同じく非バンドルで配ると、ネットワーク越しに数百リクエストが飛ぶ。**ローカルホストだから成立していた戦略**であって、実回線では成立しない。

この2つは**別々のコード**で動くため、開発時には問題が起きず本番でのみ問題が発生する場合がある（リリース前に `vite preview` で確認するのが望ましい）。

この「dev と build が別実装」という性質が Vite 8 でどうなるかは 3-4 で見る。

<!-- 📊 図版: webpack と Vite の開発サーバー比較。webpack は起動時にアプリ全体をバンドルして1ファイルで配信、Vite は依存だけ事前バンドルし、ソースは要求された分だけ変換して個別に配信する -->

## 2-2. なぜ dev は速いのか — 事前バンドルの役割

アプリのソースを事前に処理しないため開発サーバーの起動が速い。esbuild が事前バンドルするのは `node_modules` の依存**だけ**で、理由は次の3つである。

- **パッケージ名を解決するため** — `import { nanoid } from 'nanoid'` のような裸の名前（bare specifier）はブラウザが解決できない。事前バンドル時に `/node_modules/.vite/deps/nanoid.js` という実パスに書き換える
- **CommonJS を ESModule に変換するため** — npm 上のパッケージには `module.exports` で書かれたものが今も多い。ブラウザに `require` は無いので、そのままでは動かない（→ パート4）
- **リクエスト数を抑えるため** — lodash のようなパッケージは内部が数百モジュール。そのまま配ると数百リクエストになる

結果は `node_modules/.vite/` にキャッシュされ、依存が変わらない限り再利用される。

## 2-3. HMR — 状態を保ったまま差し替える

ファイルを保存したときに、**ページ全体を再読込せず、変わったモジュールだけを入れ替える**仕組み。

変更されたモジュールから、依存グラフを**親方向（import している側）へ遡って「更新境界」を探す**。

1. 変更されたモジュールが `import.meta.hot.accept()` を持っていれば、そこで伝播を止め、そのモジュールだけ再取得して差し替える
2. 持っていなければ、それを import している親へ伝播する
3. エントリまで遡っても境界が見つからなければ、**ページ全体をリロード**（フォールバック）

- React / Vue のプラグインが各コンポーネントに `accept` を自動で挿入するため、実際には**コンポーネント単位で伝播が止まる**
- CSS は常に差し替え可能（`<style>` の中身を入れ替えるだけで済む）
- 差し替わるのは対象モジュールだけなので、**他のモジュールが持っている変数の値は残る**。これが live reload との違い

---

## パート3 · Vite 7 → 8 の変更点

## 3-1. 内部エンジンの置き換え（JS / Go 製 → Rust 製）

開発時・本番ビルドに使用するツール群が一新された。
一方で、開発サーバーの動作モデル（事前バンドル → ネイティブ ESModule → オンデマンド変換 → HMR）と、設定ファイルの基本構造は変わらない。

| 処理 | Vite 7 | Vite 8 |
|---|---|---|
| 依存の事前バンドル（開発時） | esbuild（Go 製） | **Rolldown**（Rust 製） |
| TS / JSX の変換・JS の minify | esbuild（Go 製） | **Oxc**（Rust 製） |
| 本番のバンドル | Rollup（JS 製） | **Rolldown**（Rust 製・Oxc ベース） |
| CSS の変換・minify | esbuild（Go 製） | **lightningcss**（Rust 製） |
| `vite` パッケージの依存 | esbuild, rollup ほか | rolldown, lightningcss ほか |

- 置き換わったのは**開発時・本番の両方**。「esbuild は Go 製だから dev は変わらない」ということはない
- `vite.config.js` の基本構造は変わらない。Rolldown が Rollup 互換を目標としているため、`rollupOptions` も維持されている（→ 6-5）
- **注意：lightningcss は minify だけでなく構文変換もする** — 単なる minifier の差し替えではない。7 → 8 で **CSS の出力内容が変わる**

```css
/* Vite 7（esbuild）：そのまま */
:root{color-scheme:light dark}

/* Vite 8（lightningcss）：変数 ＋ @media に展開される */
:root{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark}
@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}
```

## 3-2. なぜ Rust だと速いのか

「Rust だから速い」で終わらせると、esbuild（Go 製）がすでに十分速かったことを説明できない。実際に効いているのは次の3点である。

| 要因 | 中身 |
|---|---|
| **並列化** | Rollup 4 はパーサだけ Rust 化済みだが、**その後の束縛解析・tree shaking・チャンク割当は JS のメインスレッド1本**で回る。Rust 実装は依存関係の無いモジュール単位の parse / transform をコア数分に分散でき、モジュール間の依存で順序が決まるリンク処理だけが直列に残る |
| **AST を作り直さない** | Vite 7 は「esbuild が変換（ここで parse ①）→ **その出力を Rollup がまた parse**（②）→ minify でさらに parse（③）」と、同じコードを3回 AST 化していた。Oxc は parser / semantic 解析 / transformer / minifier が**同じ AST とスコープ情報を共有**するので、この往復が消える |
| **言語境界のコスト** | esbuild は Go の別プロセスで動き、呼び出しのたびにコードを文字列でやり取りする。Rolldown / Oxc は Node と同一プロセス内で動く |

速くなった理由は言語そのものではなく、**言語が変わったことで並列化と AST の共有が可能になった**ことにある。

## 3-3. 実測：効き方は規模で変わる

`04-bench/` で、同じソースを Vite 7.3.6 と Vite 8.3.0 でビルドして比較した実測値。

| 対象 | Vite 7（Rollup） | Vite 8（Rolldown） | 倍率 |
|---|---|---|---|
| 約6,900モジュール・コード分割あり | ~29.0 s | **~1.4 s** | 約20倍 |
| 約6,900モジュール・分割なし（単一バンドル） | ~29.0 s | **~0.6 s** | 約48倍 |
| 10モジュールの小さなサンプル（`02b-vite7` / `02-vite`、8 側は 8.2.2） | ~180 ms | ~200 ms | **差が出ない** |

- **小さいプロジェクトでは差が出ない。むしろ 8 のほうが遅く見える** — プロセス起動のオーバーヘッドが支配的で、Rolldown の並列バンドルが働く前に終わってしまうため
- **Vite 7 はコード分割の有無でほぼ変わらない**（~29.0s のまま）。支配的なのはチャンクの書き出しではなく、**グラフ構築と解析側**（→ 6-3）
- 両者でチャンク数（2,225 / 1）と dist サイズがほぼ一致しているので、違う量のモジュールを処理しているわけではない
- ただし**完全に同条件ではない** — minify の既定が 7 は esbuild / 8 は Oxc で共通化できない。また `sourcemap: true` は、Rollup 側で特に重い経路を通るため 8 に有利に働いている可能性がある

計測条件：WSL2 / 16コア / Node 24、Linux ネイティブ FS、3回の中央値。9p（Windows 側 FS）上で測ると I/O 待ちに埋もれて差が消える。

## 3-4. 速度以外の意味 — dev と build の距離

2-1 で触れた「dev と build が別実装だから、開発時に気づけない差異が出る」という問題に対して、Vite 8 は次の位置にある。

| | Vite 7 | Vite 8 |
|---|---|---|
| dev の変換 | esbuild | **Oxc** |
| build の変換 | esbuild | **Oxc** |
| dev の事前バンドル | esbuild | **Rolldown** |
| build のバンドル | Rollup | **Rolldown** |

- 変換もバンドルも**両側が同じ実装を通るようになった**ため、「dev では通るが build で壊れる」種類の差異は構造的に減る方向にある
- ただし**二層構造そのものは維持されている**。dev は依然としてアプリのソースをバンドルしない
- したがって、**`vite preview` での確認は引き続き必要**
- 差異が残りやすいのは **CSS**（→ 3-1 の lightningcss）と、**minify 後の出力の細部**。JS の意味は変わらないが、文字列リテラルがすべてバッククォートに変わるなど見た目は大きく変わる

---

## パート4 · なぜ「ビルド」が必要か

ビルドしても**バイナリは出来ない**。出来上がるのは JS ファイルで、それをブラウザの JS エンジンが読む。C 言語のコンパイルとは目的が違う。ではなぜビルドするのか。理由は大きく2つある。

1. **新しい構文を、古い実行環境でも動く構文に変換するため**（→ 4-5）
2. **モジュールに分けて書いたコードを、ブラウザで成立させるため** ← こちらが本題

## 4-1. `<script>` を並べていた時代の2つの問題

```
<script src="jquery.js"></script>
<script src="utils.js"></script>   <!-- jquery より後でないと動かない -->
<script src="app.js"></script>     <!-- 順番管理は人間の仕事 -->
```

- **問題1：読み込み順を人間が管理する** — 依存関係がコードのどこにも書かれていないので、ファイルが増えるほど破綻する
- **問題2：全部がグローバル変数になる** — `window` に生えるので、名前が衝突する

当時の回避策は、関数で囲ってスコープを作る（IIFE）／名前空間オブジェクトを1つだけ置く、といった書き方の工夫だった。

この2つの問題が、以降のモジュールシステムとバンドラが解こうとしてきたものである。

## 4-2. CommonJS による依存解決

```
const utils = require('./utils');
module.exports = { foo };
```

2009年、Node.js が採用した方式。

- 依存を**書いた場所で宣言する**ので、**問題1（並び順の管理）**が解決した
- モジュールごとにスコープが閉じるので、**問題2（グローバル汚染）**も解決した
- ただしこれは **Node.js のための仕様**。**ブラウザに `require` は存在しない**

同時期に、ブラウザ向けの非同期版として AMD（RequireJS, 2011）、両対応の定型として UMD（2011頃）も現れたが、いずれも**言語仕様ではなくライブラリ側の取り決め**だった。

ブラウザ環境でも CommonJS と同様の記法を実現する需要が、バンドラ登場の動機となった。

## 4-3. バンドラの成り立ち

browserify（2011） → **webpack（2012）**

バンドラは「まとめる道具」ではなく、ブラウザに**無いモジュールシステム**を、ビルド時に**自前で埋め込む**道具である。

「複数ファイルが1つになる」のは、この目的を達成した**結果**にすぎない。

実際に埋め込まれたものは、パート6で webpack の出力を開いて確認する（→ 6-1）。

## 4-4. ESModule 標準化後もバンドラが必要な理由

```
import { foo } from './utils.js';
export const bar = 1;
```

ES2015 で、ついに**言語仕様としての**モジュールが策定された。2017年には主要ブラウザが実装し、`<script type="module">` でネイティブに動くようになった。

それでもバンドラが要る理由は4つ。

- **パッケージ名を解決できない** — `import ... from 'nanoid'` をどこのファイルにするかの規約は言語仕様の外（**誰かが解決するしかない** → 5-1）
- **リクエスト数が急増する** — モジュール1つにつき1リクエスト
- **JS 以外を import できない** — CSS も画像も import 対象にはならない
- **最適化されない** — tree shaking / minify / code splitting は行われない

ESModule 自体も2015年に完成したわけではなく、その後も機能が追加され続けている。

| 年 | 決めた場所 | 追加されたもの |
|---|---|---|
| **2015** | ECMAScript | `import` / `export`（※どう解決するかは仕様外） |
| 2017 | HTML | `<script type="module">` が主要ブラウザで動く |
| 2019 | Node.js | `package.json` の `"type": "module"` / `exports` |
| 2024〜25 | Node.js | `require(esm)`（22.12 / 20.19〜）← Vite 7 が Node 要件を上げた理由 |

ただし ESModule の登場で、**「開発中はバンドルしない」という選択肢**が生まれた。これが Vite の開発サーバー（パート2）の前提である。

## 4-5. トランスパイル（Babel）の役割の変遷

ここまでがモジュールの話。ビルドのもう一つの理由、**構文の変換**について。

```
const add = (a, b) => a + b;
// ↓ Babel が古いブラウザ向けに変換
var add = function (a, b) { return a + b; };
```

- 新しい構文を使用しても IE11 では構文エラーになる → **ES2015→ES5 変換が必須の時代**
- **IE のサポートが2022年に終了** → 「ES5 に落とす」設定は多くの現場で不要に
- 今 transpile が残る主用途は **TypeScript → JS** と **JSX → JS**

- **transpile ＝ 構文の変換**、**polyfill ＝ 存在しない API を実装で埋める**（`Promise`, `fetch`）。別物である

なお Babel はバンドラではない。**変換だけを行うツール**であり、バンドラの中の1工程として呼ばれる立場にある（→ 5-3）。

## 4-6. 年表：ビルドツールの変遷

| 年 | 出来事 | 効いたこと |
|---|---|---|
| 2009 | Node.js ＋ CommonJS | `require` の書き方が広まる |
| 2010 | npm | パッケージ配布のインフラ |
| 2011 | browserify / RequireJS | 「require をブラウザで」 |
| 2012 | **webpack** | loader で CSS・画像もモジュール化 |
| 2015 | **ES2015**：ESModule を言語仕様に ／ Babel 全盛 | `import` 誕生。ただし実装が追いつかず変換必須 |
| 2017 | 主要ブラウザが ESModule を実装 | ネイティブで `import` が動く |
| 2020 | **Vite** / esbuild が普及 | 「開発中はバンドルしない」 |
| 2022 | IE 11 サポート終了 | ES5 へのダウンレベルがほぼ不要に |
| 2023〜 | SWC / Oxc / Rolldown / Rspack | ツールの中身が JS → Rust / Go へ |

各ツールは、既存の問題を解決するために積み上げられてきた。そのため、設定項目の一つひとつには**解決したかった課題**が対応している。

ここまでが「なぜビルドが必要か」。ここからは、そのビルドが**具体的に何をしているか**を5つの工程に分けて見ていく。

---

## パート5 · ビルドの5工程

Vite の build が行う動作は、以下の5工程に分けられる。

<!-- 📊 図版: ビルドの5工程。エントリから Resolve・Load・Transform を繰り返して依存グラフを作り、Optimize と Emit でグラフ全体を出力する流れ図 -->

| 工程 | 内容 |
| --- | --- |
| ① Resolve | 依存グラフを解決 |
| ② Load | グラフ上の全モジュールを読む |
| ③ Transform | 全モジュールを変換 (ts, react, vue, ... -> js) |
| ④ Optimize | tree shaking / minify / code splitting |
| ⑤ Emit | `dist/` にハッシュ名で書く ＋ `index.html` に `<link>` 注入 |

- 各工程を Vite / webpack / esbuild がどの部品で担当し、どの設定項目に対応するかは**付録A〜E**にまとめてある。
- dev が ④⑤ を飛ばすのは**アプリのソースについて**。①②③ もリクエストが来た分だけ実行する。
- `node_modules` の依存は例外で、事前バンドル（→ 2-2）が①〜⑤をフルに回して `.vite/deps/` に作り置きしてある。

## 5-1. ① Resolve — import 文を実ファイルに対応づける

`import` に書かれた**文字列（specifier）**を、ディスク上の**実ファイルのパス**に変換する工程。

```
import { setupCounter } from './counter.js';  // 相対パス
import { nanoid }       from 'nanoid';        // bare specifier
```

| 種類 | 解決のしかた |
|---|---|
| 相対 `./counter.js` | 呼び出し元からの相対パス。拡張子の省略・`index.js` の補完もここ |
| bare `nanoid` | `node_modules/` を上位ディレクトリへ辿って探す → `package.json` の `exports` / `main` で入口を決める |

**`exports` はどう選ばれるか** — ツール側が「条件（conditions）」の**優先順リスト**を持っていて、`exports` のオブジェクトを**上から順に走査し、最初にマッチした条件を採用する**。

```json
"exports": { ".": { "browser": "./index.browser.js",
                    "import":  "./index.js",
                    "require": "./index.cjs" } }
```

- Vite はブラウザ向けなので `['browser', 'import', ...]` の順で問い合わせる → **`browser` が先にマッチ**して `index.browser.js`
- Node 向けのツールは `browser` を持たないので、次の `import` にマッチして `index.js`
- **記述順が優先順位**（JSON のキー順に意味がある珍しい例）。条件は入れ子にでき、その場合も深さ優先で最初の一致を採る
- この優先順は設定で変えられる（Vite の `resolve.conditions` / webpack の `conditionNames` → 付録B）

同じ `'nanoid'` という文字列が、**誰が解決するかで違うファイルになる**。

- 解決したファイルを ②③ してまた `import` を見つけ、**①②③ を再帰的に繰り返す**ことで依存グラフができる
- **ブラウザはこの探索をしない**（→ 4-4）ので、誰かが肩代わりするしかない
- **Vite 8 では** この探索を Rust 実装の `oxc-resolver` が担当する（挙動は同じ）

## 5-2. ② Load — モジュールの中身を取り出す

①で決まったパスから、**中身を文字列（またはバイナリ）として読む**工程。

ほとんどはファイルの読み込みだが、ここが独立した工程になっているのは **「モジュール＝ファイル」とは限らない**ため。

| 読む対象 | 例 |
|---|---|
| 普通のファイル | `src/main.js`, `src/style.css` |
| 仮想モジュール | ディスクに実体がなく、プラグインが中身をその場で生成して返す（ビルド日時、ルート一覧など） |
| キャッシュ | 前回の処理結果を作り置きしておき、ファイルの代わりに返す |

- この時点では CSS も画像も**ただの中身**。まだ JS ではない
- 「どこから読むか」を差し替えられるので、**存在しないファイルを import させる**ことができる
- **Vite 8 では** プラグイン機構が Rollup から Rolldown のものに替わる（`load` フックの書き方は同じ）

## 5-3. ③ Transform — すべてを JS モジュールに変換する

②で読んだ中身を、**JS（ESModule）として成立する形**に書き換える工程。

| 入力 | 変換後 |
|---|---|
| `.ts` / `.tsx` | 型注釈を**取り除く**だけ（型チェックはしない） |
| `.jsx` / `.vue` / `.svelte` | `createElement` 相当の JS 呼び出しへ |
| `.css` | dev：`<style>` を注入する JS ／ build：一旦 JS にしてから④で `.css` に抽出 |
| `.json` / `.svg` など | `export default …` の形へ |

```
import './style.css';   // ← これが成立するのは、CSS が③で JS にされるから
```

- **ファイルの数は変わらない**（数を減らすのは④の bundle → 5-4）
- 型チェックは**行われない**。TS の型エラーはビルドを止めないので `tsc --noEmit` を別に回す
- **Vite の dev サーバーが実行するのはここまで**。しかもリクエストが来たモジュールだけを変換する
- **Vite 8 では** JS の変換が esbuild → **Oxc**、CSS が esbuild → **lightningcss**。CSS は出力が変わりうる（→ 3-1）

## 5-4. ④ Optimize — グラフ全体をまとめて最適化する

①〜③で**全モジュールが揃って初めて**できる処理。内訳は4つ。

| 処理 | 内容 | サンプルでの結果 |
|---|---|---|
| bundle | 依存を結合し、名前が衝突する変数はリネームする | `main` / `counter` / `utils` / `nanoid` → `index-*.js` 1本 |
| tree shaking | どこからも使われない export を落とす | `utils.js` の `unused()` が消える（`UNUSED_MARKER` の出現数 **0**） |
| code splitting | 到達できるエントリの組み合わせでチャンクを分ける（→ 5-5） | `await import('./heavy.js')` → `heavy-CuXC7Vo8.js` |
| minify | 変数名短縮・空白削除・デッドコード除去 | `export const heavyMessage = …` → `var e=…;export{e as heavyMessage}` |

- tree shaking の判断材料は `package.json` の **`sideEffects`** と **`/*#__PURE__*/`**（`nanoid` は `"sideEffects": false` を宣言している）。判定の中身は 6-5 で見る
- **グラフ全体が前提**なので、アプリのソースを1モジュールずつ処理する dev では原理的に実行できない ← dev と build が別実装になる理由
- **Vite 8 では** この4つすべてが Rollup → **Rolldown**（minify は Oxc / lightningcss）。ここが 7 → 8 で最も時間が変わる工程（→ 3-3）

## 5-5. code splitting はどう決まるか

「動的 `import()` のところで分かれる」は結果であって、分割そのものは次のように決まる。

1. **チャンクの起点を集める** — 静的なエントリ（`index.html` から辿る `main.js` など）と、**すべての動的 import 先**
2. **各モジュールについて「どの起点から到達できるか」の集合を求める**
3. **同じ集合を持つモジュールを、1つのチャンクにまとめる**

```
main.js ──────┐                 集合 {main}        → index-*.js
              ├── shared.js     集合 {main, heavy} → shared-*.js（自動で分離）
heavy.js ─────┘                 集合 {heavy}       → heavy-*.js
```

- 2つのエントリから使われる共有モジュールが**自動で別チャンクに切り出される**のはこのため。人間が指定しなくても重複しない
- `rollupOptions.output.manualChunks` は、この自動計算に**人間が介入する口**（例：依存を丸ごと vendor に寄せる）
- **webpack は方式が違う** — `optimization.splitChunks` は `minSize` / `maxAsyncRequests` などの**ヒューリスティック**で決める。設定項目が多いのはこのため（`chunks: 'all'` を書いても、既定の 20KB に届かない依存は分離されない）
- **Vite 8 では** Rolldown が Rollup 互換の分割を目標としており、チャンクの分かれ方は基本的に同じ

## 5-6. ⑤ Emit — `dist/` に書き出す

④で確定したチャンクを、**配信できる形のファイル群**として書き出す工程。

```
dist/
├─ index.html
└─ assets/
   ├─ index-Bx43ohxV.js     ← エントリ（ファイル名に内容ハッシュ）
   ├─ index-BBFHx35T.css    ← ③で JS 化した CSS を抽出したもの
   ├─ heavy-CuXC7Vo8.js     ← 動的 import で分割されたチャンク
   └─ *.js.map              ← sourcemap
```

| やること | 具体的な中身 |
|---|---|
| 内容ハッシュ付きの命名 | 中身が変わった時だけ名前が変わる → **ブラウザキャッシュを効かせるため** |
| HTML への注入 | ソースの `<script src="/src/main.js">` を、ハッシュ付き `<script>` ＋ `<link>` に書き換える |
| アセットの処理 | 小さい画像などは base64 で JS / CSS に埋め込み、大きいものは `assets/` へコピー |
| sourcemap の出力 | minify 後のコードを元ソースに対応づける |

- ハッシュは中身から計算するが、**子チャンクのファイル名は親のコードの中に文字列として埋まっている**。したがって子のハッシュが変われば親のハッシュも変わり、**依存チェーンに沿って伝播する**
- そのため、頻繁に変わるアプリコードと滅多に変わらない依存を分けておかないと、1行の修正で広範囲のキャッシュが無効になる ← `manualChunks` で vendor を分ける動機
- ファイル名が毎回変わるので、**HTML を書き換える工程がセットで必要**になる
- **Vite 8 では** 書き出しは Rolldown 側へ移るが、ハッシュ命名も HTML 注入も動作は同じ
- `npm run build` はここで終わる。以降は静的ファイルを配信するだけで、**実行時にビルドツールは動かない**

---

## パート6 · バンドラはそれをどう実装しているか

パート5 は「何をするか」。ここでは、**同じ工程を各ツールがどうやっているか**を、工程ごとに横に並べて見る。

webpack / Rollup / Rolldown は、やっていることは同じでも**選んだアルゴリズムが違う**。その違いが、出力の形・速度・設定項目の多さとして表に出る。

## 6-1. ④ bundle の実装 — モジュールをどう再現するか

複数モジュールを1ファイルに束ねるとき、**モジュールの境界（スコープと参照）をどう保つか**で2つの方式がある。

**方式① ランタイム埋め込み**（webpack）— 各モジュールを関数に包み、ID をキーにした表に登録し、`require` 相当の関数を自前で同梱する

```
var __webpack_modules__ = ({
  "./src/counter.js": ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* … */ }),
  "./src/utils.js":   ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { /* … */ })
});

function __webpack_require__(moduleId) {
  const cached = __webpack_module_cache__[moduleId];
  if (cached !== undefined) return cached.exports;              // 評価は1回だけ
  const module = __webpack_module_cache__[moduleId] = { exports: {} };
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;                                        // 循環参照は「書きかけの exports」を返して断ち切る
}
```

**方式② スコープホイスティング**（Rollup / Rolldown / esbuild）— 全モジュールを**1つのスコープに平らに展開**し、衝突する名前だけ `foo$1` にリネームする。関数ラッパーも `require` 相当も**出力に存在しない**

| | 方式① 埋め込み | 方式② 平坦化 |
|---|---|---|
| モジュールの境界 | 関数スコープ | リネームで区別 |
| 評価順の制御 | 実行時に `__webpack_require__` が行う | ビルド時に並び順として確定 |
| 出力サイズ | ランタイム分だけ増える | 増えない |
| 同教材での実測 | webpack 4,316 B | esbuild 1,534 B / Vite 3,425 B |

webpack の 4,316 B のうち **runtime だけで 7.78 KiB（minify 前）** を占める。方式①がコストを払っているのは、**2012年のブラウザに ESModule が無かった**から。今はブラウザ自身がモジュールシステムを持っているので、方式②は何も埋め込まなくてよい。

webpack 5 も ESModule 出力は可能（`experiments.outputModule` ＋ `output.module: true`）。ただし現在も experimental。

## 6-2. ②③ Load / Transform の実装 — 差し込み口の設計

「JS 以外のファイルをどう JS にするか」は、どのツールも**外部から差し込める口**として設計されている。呼び名が違うだけで、刺さる位置は同じ。

| 工程 | Rollup / Rolldown / Vite | webpack | esbuild |
|---|---|---|---|
| ① Resolve | `resolveId` | `resolve.plugins` | `onResolve` |
| ② Load | `load` | loader（読み込み結果を受け取る） | `onLoad` |
| ③ Transform | `transform` | loader | `onLoad` の中で変換まで |

**webpack の loader は「チェーン」** — 拡張子ごとに複数の loader を並べ、**配列の末尾から先頭へ**順に適用する。

```
use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
       ↑ ②番目に実行         ↑ ①番目に実行
```

1. **css-loader** — CSS を読んで `@import` / `url()` を解決し、**JS モジュールに変換**
2. **MiniCssExtractPlugin.loader** — JS 化された CSS を横取りして plugin 側に渡す（実際に `.css` として書き出すのは plugin が emit 時に行う。開発時は `style-loader` が `<style>` として注入）

**Rollup / Vite は1つのフックに集約** — `transform(code, id)` が呼ばれ、拡張子で分岐するのはプラグイン側の責任。チェーンではなく、登録順に全プラグインを通す。

どちらも前提は同じ：**あらゆる依存を JS モジュールとして扱う**。`import './style.css'` が書けるのはこの設計の帰結（→ 5-3）。

## 6-3. ④ tree shaking の実装 — 到達可能性をどう求めるか

「使っていないコードを消す」は、**どこまでが「使っている」かを求める問題**に帰着する。

**基本のアルゴリズム（不動点反復）**

1. エントリの**副作用のある文**と、外部に公開する **export** に印を付ける
2. 印の付いた文が参照している変数の**宣言**にも印を付ける
3. 新しく印が付いた文について 2 を繰り返す
4. **印が増えなくなったら終了**（不動点）。印の付かなかった文を落とす

この「増えなくなるまで回す」部分が、**Vite 7 のビルド時間の大きな割合**を占める（→ 3-3 でコード分割の有無に関係なく ~29秒だった理由）。

**ツールによる違い**

| | 削除の単位 | 実際に消すのは |
|---|---|---|
| Rollup / Rolldown | **文（statement）単位** | バンドラ自身 |
| webpack | **export 単位**（`usedExports` で「使われている export」に印） | **minifier（terser）** に委ねる |
| esbuild | 文単位（`bundle: true` 時） | esbuild 自身 |

webpack で `mode: 'production'` にしないと効かないのは、**印を付けるのは webpack、消すのは terser**という二段構えだから。

**なぜ宣言が必要か** — 「この関数呼び出しに副作用があるか」は静的解析では判定しきれない。そこで `package.json` の `sideEffects: false` と `/*#__PURE__*/` で、**人間が「消してよい」と保証する**。`nanoid` は `"sideEffects": false` を宣言している。

## 6-4. パイプライン全体 — Rollup コアの4フェーズ

ここまでの部品が、実際にはこの順で並んでいる。

| フェーズ | 中身 |
|---|---|
| ① パース | 各モジュールを AST に。**Rollup 4 はネイティブパーサ**（Rust・SWC ベース）。昔は Acorn（JS製） |
| ② グラフ ＋ バインディング解析 | import を辿って依存グラフを作り、**全モジュールの変数束縛とスコープ**を解析。どの export がどこで使われるか |
| ③ tree-shaking ＋ chunk 分割 | 6-3 の不動点反復と、5-5 の到達集合による分割 |
| ④ レンダリング | 含める文だけを**元のソース文字列のまま**繋ぎ直す。AST を出力し直すのではなく **magic-string** で必要箇所のみ編集（リネーム・削除・ラップ） |

- ④が「AST から出力を再生成しない」のが Rollup の特徴。元のコードの字面が保たれるので、sourcemap も素直に作れる
- **コアがやらないことは全部プラグイン** — bare 解決 ／ TS・JSX 変換 ／ minify ／ CSS
- したがって Vite 7 の `vite build` は **Rollup コア ＋ Vite 内蔵プラグイン（解決は自前の `vite:resolve`）＋ esbuild** の組み合わせになる

## 6-5. Rolldown — 同じアルゴリズムを Rust で

Rolldown は新しいアルゴリズムを持ち込んだわけではない。**6-4 の4フェーズをそのまま Rust で組み直し、プラグインに出していた仕事を内蔵した**もの。

| Rollup コアの部品 | Rolldown |
|---|---|
| SWC ベースのパーサ | Oxc パーサ |
| 自前のスコープ / バインディング解析 | Oxc の semantic 解析 |
| tree-shaking / chunk | Rolldown 自前（Rollup 互換の挙動が目標） |
| magic-string でのレンダリング | Rolldown 自前（Rust の文字列処理） |
| （esbuild プラグインが担当）変換 / minify | **Oxc の transformer / minifier を内蔵** |
| （`vite:resolve` が担当）解決 | **oxc-resolver を内蔵** |

- パーサから minifier までが Oxc の**同じ AST 上に載る** ＝ 3-2 の「AST を作り直さない」の実体
- 解決・変換を内蔵したことで、**プラグイン境界をまたぐたびに発生していたコードの受け渡し**が消える
- プラグイン API は Rollup 互換なので、既存のプラグイン資産の大部分がそのまま動く。`vite.config.js` の `rollupOptions` が Vite 8 でも維持されているのはこのため

## 6-6. 同じ置き換えが、ツール全体で起きている

| これまで（JS製） | 置き換え先 | 言語 | ひとこと |
|---|---|---|---|
| Babel | SWC / Oxc / esbuild | Rust / Go | Next.js はすでに SWC |
| webpack | **Rspack** / Turbopack | Rust | **Rspack は設定がほぼ互換** |
| Rollup | **Rolldown** | Rust | Vite 8 で採用済み |
| terser | esbuild / oxc-minify | Go / Rust | — |
| ESLint | Oxlint / Biome | Rust | ビルド外だが同じ流れ |

重要な点は、**アルゴリズム自体は変化していない**ことである。
5工程も、不動点反復も、差し込み口という抽象も、そのまま通用する。

---

## パート7 · まとめ

## 7-1. 用語の整理：transpile / bundle / minify ほか

- **transpile（変換）**（工程 ③） — 構文を別の構文に書き換える。TS→JS、ES2022→ES2015。 **ファイルの数は変わらない。**
- **bundle（結合）**（工程 ④） — ①で辿った依存グラフをもとに、複数モジュールを束ねる。 **ファイルの数が減る。**

esbuild の設定で `bundle: false` にすると、`import` 文が **そのまま出力に残る**。変換のみが行われ、依存関係はたどられていない状態である。

| 用語 | 意味 | 混同しやすい相手 |
|---|---|---|
| tree shaking | どこからも使われない export を落とす | minify（あちらは縮めるだけ） |
| code splitting | 出力を複数ファイルに分ける。起点は静的エントリと動的 import | bundle（逆向きの操作） |
| HMR | **状態を保ったまま**変わったモジュールだけ差し替え | live reload（ページごと再読込） |
| polyfill | 存在しない**API**を実装で埋める | transpile（あちらは構文の話） |

## 7-2. 5工程で見る Vite 7 → 8 の変更範囲

| 工程 | Vite 7 → 8 での変化 |
|---|---|
| ① Resolve ／ ② Load | 外から見た動作は同じ（内部実装は Rolldown 側へ） |
| ③ Transform（TS / JSX / CSS） | JS: esbuild → Oxc ／ CSS: esbuild → lightningcss |
| ④ Optimize（bundle / tree shaking / minify / split） | Rollup → Rolldown（JS minify は Oxc、CSS minify は lightningcss） |
| ⑤ Emit | 動作は同じ（ハッシュ付きファイル名・`<link>` 注入） |
| （開発時）依存の事前バンドル | esbuild → Rolldown |

- **開発サーバーの動作モデルと、設定ファイルの基本構造は変わらない**
- ビルドの5工程という骨格も変わらない。実装言語が変わり、高速化した

変わったのは各工程を実行するエンジンであり、工程そのものではない。

## 7-3. 要点の再確認

1. **Vite 7 → 8 の主な変更は、内部エンジンの JS / Go 製 → Rust 製への置き換え** — 開発時の事前バンドルと変換（esbuild → Rolldown / Oxc）、本番のバンドル（Rollup → Rolldown）、CSS 処理（esbuild → lightningcss）。開発サーバーの動作モデルと設定構造は変わらない。
2. **速くなった理由は言語名ではなく、並列化と AST の共有**（→ 3-2）。効き方は規模に依存し、小さなプロジェクトでは差が出ない（→ 3-3）。
3. **エンジンは変わったが、ビルドの5工程という骨格は変わらない** — Resolve / Load / Transform / Optimize / Emit。「同じ処理を、より速い実装で行う」という位置づけ。

検証手順：

- 出力の比較 — `02-vite`（:5173）と `02b-vite7`（:5273）を両方 `npm run build` して比べる。**ファイルはバイト一致しない**（ハッシュも minifier も違うので `diff -rq` は全ファイル差分を返す）。見るのは `index.html` の差がハッシュ2行だけであることと、画面の挙動が一致すること
- ビルド時間 — `04-bench/README.md` の手順（Linux ネイティブ FS 上で `npm run build` を3回）
- CSS の確認 — 出力 CSS を 7 / 8 で目視比較する。`color-scheme` のように lightningcss が展開するプロパティを使っている場合は特に

設定項目との対応は**付録A〜E**（5工程 × Vite 7 / Vite 8 / webpack 5 / esbuild）。
webpack を含む詳細版は `SLIDES.html`、前提知識は `docs/js-background.md`。

---

## 付録 · ツールごとの対応と設定

パート5 の各工程（5-1〜5-6）を、Vite 7 / Vite 8 / webpack 5 / esbuild で具体的にどう扱うかの一覧。設定例は本リポジトリの `01-esbuild` / `02-vite` / `02b-vite7` / `03-webpack` を下敷きにした一般形で、各リポジトリの設定ファイルそのままではない。

## 付録A. 5工程 × ツールの担当

| 工程 | Vite 7 | Vite 8 | webpack 5 | esbuild |
|---|---|---|---|---|
| ① Resolve | Vite 内蔵の解決処理（JS） | oxc-resolver（Rust） | enhanced-resolve | 内蔵（Go） |
| ② Load | Rollup のプラグイン機構 | Rolldown のプラグイン機構 | NormalModule | 内蔵 |
| ③ Transform | esbuild | Oxc ／ CSS は lightningcss | loader（babel-loader, ts-loader, css-loader…） | 内蔵 |
| ④ Optimize | Rollup ＋ esbuild（minify） | Rolldown ＋ Oxc / lightningcss（minify） | seal フェーズ ＋ TerserPlugin / SplitChunksPlugin | 内蔵 |
| ⑤ Emit | Rollup ＋ Vite の HTML 処理 | Rolldown ＋ Vite の HTML 処理 | `emit` フック ＋ HtmlWebpackPlugin | 書き出しのみ（**HTML 注入なし**） |
| dev サーバー | ③を要求された分だけ（④⑤なし） | 同左 | **①〜⑤を全部実行**（出力先がメモリ／minify なし） | ①〜⑤を実行（HMR なし） |

プラグインが割り込む入口（フック）の対応は 6-2 を参照。④⑤ のフックは次のとおり。

| 工程 | Rollup / Rolldown / Vite | webpack | esbuild |
|---|---|---|---|
| ④ Optimize | `renderChunk` | `compilation.hooks.processAssets` など | — |
| ⑤ Emit | `generateBundle` / `writeBundle` | `compiler.hooks.emit` | `onEnd` |

## 付録B. ① Resolve の設定

```
// Vite（vite.config.js）
resolve: {
  alias: { '@': '/src' },                       // import '@/utils.js' → /src/utils.js
  extensions: ['.mjs', '.js', '.ts', '.json'],  // 拡張子の省略を許す順
  conditions: ['browser'],                      // package.json の exports のどの条件を選ぶか
},
```

```
// webpack（webpack.config.js）
resolve: {
  alias: { '@': path.resolve(__dirname, 'src') },
  extensions: ['.js', '.mjs', '.json'],
  conditionNames: ['browser', 'import'],
},
```

```
// esbuild（build.mjs）
entryPoints: ['src/main.js'],      // グラフを辿り始める起点
platform: 'browser',               // exports の browser 条件を優先
resolveExtensions: ['.js', '.ts'],
```

- Vite では `index.html` そのものがエントリ。webpack / esbuild は JS ファイルをエントリに指定する

## 付録C. ② Load ・ ③ Transform の設定

**Vite** — 変換はほぼ自動。独自の読み込み・変換はプラグインで足す

```
plugins: [{
  name: 'build-info',
  resolveId(id)       { if (id === 'virtual:build-info') return '\0virtual:build-info'; },
  load(id)            { if (id === '\0virtual:build-info') return `export const builtAt = ${Date.now()}`; },
  transform(code, id) { if (id.endsWith('.txt')) return `export default ${JSON.stringify(code)}`; },
}],
define: { __APP_VERSION__: JSON.stringify('1.0.0') },  // ソース中の識別子を置換
```

- JSX などの変換オプションは Vite 7 では `esbuild`、Vite 8 では `oxc` で指定する

**webpack** — 拡張子ごとに loader を明示する（配列は**末尾から先頭へ**適用 → 6-2）

```
module: {
  rules: [
    { test: /\.css$/i, use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'] },
    { test: /\.(png|jpe?g|gif|svg|woff2?)$/i, type: 'asset' },
    { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
  ],
},
```

**esbuild** — 拡張子 → 扱い方の対応表を渡す

```
loader: { '.css': 'css', '.svg': 'dataurl', '.png': 'file' },
target: ['es2020', 'chrome100', 'firefox100', 'safari15'],  // これより新しい構文はダウンレベル変換
```

## 付録D. ④ Optimize の設定

| 処理 | Vite | webpack | esbuild |
|---|---|---|---|
| bundle | 常に有効（build 時） | 常に有効 | `bundle: true`（false だと変換のみ） |
| tree shaking | 常に有効 | `mode: 'production'` で有効（`optimization.usedExports` / `sideEffects`） | `bundle: true` で有効（`treeShaking`） |
| code splitting | 動的 import で自動 ／ `rollupOptions.output.manualChunks` | `optimization.splitChunks` | `splitting: true`（`format: 'esm'` 時のみ） |
| minify | `build.minify` / `build.cssMinify` | `optimization.minimize` / `minimizer` | `minify: true` |

```
// Vite：依存を vendor チャンクにまとめる
build: { rollupOptions: { output: { manualChunks: { vendor: ['nanoid'] } } } },

// webpack：node_modules 由来を自動で分離
optimization: { splitChunks: { chunks: 'all' } },   // ただし既定の minSize（20KB）に届かない依存は分離されない

// esbuild：動的 import と共有モジュールを別チャンクに
bundle: true, format: 'esm', splitting: true, minify: true,
```

## 付録E. ⑤ Emit の設定

| 項目 | Vite | webpack | esbuild |
|---|---|---|---|
| 出力先 | `build.outDir`（既定 `dist`） | `output.path` | `outdir` |
| ハッシュ付き命名 | 既定で `assets/[name]-[hash].js` | `output.filename: '[name].[contenthash:8].js'` | `entryNames: '[name]-[hash]'` |
| HTML への注入 | 自動（`index.html` がエントリのため） | `HtmlWebpackPlugin` | なし（自分で書く） |
| CSS の抽出 | 自動 | `MiniCssExtractPlugin` | `loader: { '.css': 'css' }` で自動 |
| 小さいアセットの埋め込み | `build.assetsInlineLimit`（既定 4096 byte） | `type: 'asset'`（既定 8KB） | `loader` で `dataurl` / `file` を選ぶ |
| sourcemap | `build.sourcemap` | `devtool` | `sourcemap` |
| 出力内容の解析 | — | `--json` ＋ webpack-bundle-analyzer | `metafile: true` ＋ `analyzeMetafile` |
