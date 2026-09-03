# JS のビルドツールを、改めて学ぶ

「なんとなく使っている」を「仕組みが分かっている」に変えるための教材です。
読むだけの解説（このファイル）と、**実際に動かして出力を比べる 4 つのサンプル**で出来ています。

| フォルダ | 学ぶこと |
|---|---|
| [`00-no-bundler/`](./00-no-bundler/README.md) | バンドラなし。素のブラウザに何が出来ないかを体感する |
| [`01-esbuild/`](./01-esbuild/README.md) | バンドラの原理を、一番薄いレイヤーで見る |
| [`02-vite/`](./02-vite/README.md) | 今の標準。dev と build でアーキテクチャが違う理由 |
| [`03-webpack/`](./03-webpack/README.md) | `__webpack_require__` の正体と、loader / plugin の世界観 |

同じアプリ（カウンター + nanoid + CSS import + 動的 import）を 3 通りでビルドしてあります。
**ソースは全部同じ**なので、違うのは設定と出力だけです。

---

## 0. 先に結論

| | 一言でいうと |
|---|---|
| **バンドラ** | `import` を辿って **たくさんのファイルを少数のファイルに束ねる**プログラム |
| **webpack** | 何でも出来る老舗。設定＝loader と plugin を組み立てる作業 |
| **esbuild** | Go 製の超高速バンドラ。webpack の 10〜100 倍速い。機能は絞ってある |
| **Rollup / Rolldown** | ライブラリ向けに強いバンドラ。Vite の本番ビルドの中身 |
| **Vite** | バンドラ **ではない**。「dev サーバー + バンドラ設定済みパック」。中で Rolldown を呼ぶ |

**Vite と webpack は同じレイヤーの competitor ではない**、というのがまず押さえるべき点です。
webpack はバンドラ単体、Vite はバンドラを内蔵した開発ツール一式。比べるなら
「webpack + webpack-dev-server + 各種 loader + plugin」の**セット**と Vite が対等です。

---

## 1. なぜ「ビルド」が必要になったのか

歴史を 5 分で。ここが分かると設定ファイルが読めるようになります。

### ① `<script>` を並べていた時代（〜2010頃）

```html
<script src="jquery.js"></script>
<script src="utils.js"></script>   <!-- utils.js より先に jquery が要る -->
<script src="app.js"></script>     <!-- 順番を間違えると死ぬ -->
```

問題は 2 つ。**依存の順番を人間が管理する**ことと、**全部がグローバル変数**であること。
ファイルが 10 個を超えたあたりで破綻します。

### ② CommonJS の登場（2009, Node.js）

```js
const utils = require('./utils');
module.exports = { foo };
```

順番の問題は解決。でもこれは **Node.js 用の仕様**で、ブラウザには `require` が存在しません。
「Node で書けるあの書き方をブラウザでもやりたい」——
この願いを叶えるために生まれたのが **browserify（2011）→ webpack（2012）** です。

> **これがバンドラの出自です。** 「複数ファイルを1つにまとめる道具」というより、
> 「ブラウザに無いモジュールシステムを、ビルド時に解決して埋め込む道具」が本来の姿。

### ③ ESM が標準になった（2015 仕様策定 / 2017 ブラウザ実装）

```js
import { foo } from './utils.js';
export const bar = 1;
```

ようやく言語仕様としてのモジュールが来ました。じゃあバンドラ要らないのでは？　**要ります。**
理由は `00-no-bundler/` で実際に確認できますが、要点は 4 つ:

1. **bare specifier を解決できない** — `import 'nanoid'` はブラウザにとって意味不明。
   `node_modules` の中から実体を探す仕事は誰かがやらないといけない
2. **リクエストが爆発する** — 1 モジュール = 1 リクエスト。実務規模では数百〜数千
3. **JS 以外を import できない** — CSS も画像も TypeScript も JSX も
4. **最適化されない** — minify も、未使用コード削除も、古いブラウザ対応も

### ④ そして今（2020〜）

ESM が前提になったことで、**「dev では ESM をそのまま使い、本番だけバンドルする」**
という発想が可能になりました。これが Vite（2020）です。
さらに変換処理そのものを Go / Rust で書き直して桁違いに速くする流れ（esbuild, SWC, Oxc,
Rolldown, Rspack, Turbopack）が今も進行中です。

---

## 2. ビルドツールが実際にやっている 5 工程

どのツールも、名前が違うだけで中身はこの 5 段階です。
webpack の設定項目も Vite のプラグイン API も、全部この 5 つのどこかに対応します。

```
  entry (src/main.js)
        │
   ┌────▼──────┐
   │ ① Resolve │  "./utils.js" や "nanoid" が、ディスク上のどのファイルか決める
   └────┬──────┘   → webpack: resolve.*  /  Vite: resolve.alias, optimizeDeps
   ┌────▼──────┐
   │ ② Load    │  そのファイルを読む（仮想ファイルを作る plugin もここ）
   └────┬──────┘
   ┌────▼──────┐
   │ ③ Transform│ TS→JS, JSX→JS, SCSS→CSS, CSS→JSモジュール, 構文のダウンレベル
   └────┬──────┘   → webpack: module.rules(loader) / Vite: plugins / esbuild: loader
   ┌────▼──────┐
   │ ④ Optimize│  tree shaking, minify, code splitting, chunk 分割
   └────┬──────┘   → webpack: optimization.* / Vite: build.rollupOptions
   ┌────▼──────┐
   │ ⑤ Emit    │  dist/ にファイルを書く。ハッシュ付き名前、source map、HTML への注入
   └───────────┘   → webpack: output.* + HtmlWebpackPlugin / Vite: build.*
```

**①〜② を繰り返して依存グラフ（module graph）を作る**のが前半戦、
**そのグラフを最適化して出力する**のが後半戦、と覚えると設定ファイルが読めます。

---

## 3. 用語辞典

混同しやすいものだけ。

| 用語 | 意味 | 混同しやすい相手 |
|---|---|---|
| **transpile** | 構文を別の構文に変換（TS→JS, ES2022→ES2015）。**ファイル数は変わらない** | bundle |
| **bundle** | 依存を辿って複数ファイルを束ねる。**ファイル数が減る** | transpile |
| **polyfill** | 存在しない**API**を実行時に実装で埋める（`Promise`, `fetch`）。core-js など | transpile（構文の話）|
| **minify** | 空白削除・変数名短縮。terser / esbuild / oxc-minify | uglify（昔の呼び方）|
| **tree shaking** | どこからも使われない export を落とす。**ESM の静的解析が前提** | dead code elimination（関数内の話）|
| **code splitting** | 出力を複数 chunk に分ける。動的 import が起点 | bundle（逆方向の操作）|
| **source map** | ビルド後のコード ↔ 元のコードの対応表。`.map` ファイル | — |
| **HMR** | Hot Module Replacement。**状態を保ったまま**変わったモジュールだけ差し替える | live reload（ページ全体をリロード）|

> **tree shaking が効かない典型例**: `require()` を使っている、`sideEffects` の指定が無い
> パッケージ、`import * as _ from 'lodash'` のような名前空間 import。
> ESM で名前付き import を使うのが前提条件です。

---

## 4. 登場人物をレイヤーで整理する

「webpack と Vite と Babel と esbuild、どれを選ぶ？」が意味をなさないのは、
これらが違う層にいるからです。

```
┌───────────────────────────────────────────────────────────────┐
│ フレームワーク    Next.js / Nuxt / Remix / SvelteKit / Astro    │  ルーティングやSSRまで面倒を見る
├───────────────────────────────────────────────────────────────┤
│ 開発ツール一式    Vite / Parcel / Next の内蔵ビルド             │  dev server + HMR + 設定済みバンドラ
├───────────────────────────────────────────────────────────────┤
│ バンドラ          webpack / Rollup / esbuild / Rolldown /       │  依存グラフを作って束ねる
│                  Rspack / Turbopack / Bun                      │
├───────────────────────────────────────────────────────────────┤
│ トランスパイラ    Babel / SWC / tsc / esbuild / Oxc             │  1ファイルの構文変換
├───────────────────────────────────────────────────────────────┤
│ minifier         terser / esbuild / oxc-minify / lightningcss   │  縮める
└───────────────────────────────────────────────────────────────┘
```

esbuild が 2 箇所に出てくるのがややこしい点で、**esbuild はトランスパイラでもバンドラでもある**
（だから Vite は昔 dev の変換に esbuild を、本番バンドルに Rollup を使っていた）。

**Go / Rust 製への置き換えの対応表**（速度が 10〜100 倍変わる）:

| 旧（JS製） | 新 | 言語 |
|---|---|---|
| Babel | SWC / **Oxc** / esbuild | Rust / Rust / Go |
| webpack | **Rspack**（設定互換）/ Turbopack | Rust |
| Rollup | **Rolldown**（API 互換） | Rust |
| terser | esbuild / oxc-minify | Go / Rust |
| ESLint | Oxlint / Biome | Rust |

---

## 5. webpack と Vite の決定的な違い

**本番ビルドはほぼ同じことをしています。違うのは開発時（dev server）です。**
ここが Vite が「速い」と言われる理由の全てです。

### webpack dev server: 起動時に全部バンドルする

```
   起動
    │  src を全部読む → 依存グラフ全体を構築 → バンドル → メモリに保持
    │  ████████████████████████████  (プロジェクトが大きいほど線形に遅くなる。数十秒〜数分)
    ▼
  ブラウザ ── GET /bundle.js ──> 完成済みの巨大な1ファイル

  ファイル保存
    │  変わったモジュールを差し替えて再バンドル（差分ビルド。それでも規模に比例する）
    ▼
```

### Vite dev server: バンドルしない

```
   起動
    │  依存 (node_modules) だけ事前バンドル ── これは一度きり、キャッシュされる
    │  ██  (アプリのソースは1行も読まない。数百ms)
    ▼
  ブラウザ ── GET /src/main.js ──> その場で変換して返す (on-demand)
        └───── GET /src/counter.js ──> その場で変換して返す
        └───── GET /src/style.css ──> その場で変換して返す
              ※ ブラウザのネイティブ ESM が依存を辿ってくれる
              ※ 画面に必要なモジュールしか変換されない

  ファイル保存
    │  そのファイル1つだけ変換し直して HMR で差し替え
    ▼  → プロジェクトの規模に関係なく一定時間
```

**「アプリのソースを事前に全部処理しない」** — これが Vite の核心アイデアです。
ブラウザのモジュール解決能力を、そのままバンドラ代わりに使っている。

### なぜ依存 (node_modules) だけは事前バンドルするのか

2 つ理由があります。

1. **bare specifier の書き換え** — `import 'nanoid'` を `/node_modules/.vite/deps/nanoid.js`
   のような**実パスに書き換えないとブラウザが解決できない**
2. **リクエスト数** — lodash のようなパッケージは内部で数百モジュールに分かれていて、
   そのまま配ると数百リクエストになる。1 ファイルに固めておく

### なぜ本番はバンドルするのか

dev と同じく非バンドルで配ると、**ネットワーク越しに数百リクエストが飛んで遅い**からです。
ローカルホストだから成立していた戦略で、実回線では成立しません。

> **dev と本番で別の仕組みを通る**＝ dev では動いたのに本番で壊れる、が起こり得ます。
> Vite の既知のトレードオフです（だから `vite preview` で本番ビルドを確認する）。

### 【重要】この教材の Vite は Rollup を使っていません

インストールされた Vite のバージョンと依存を実際に確認するとこうなっています:

```
vite@8.2.2 の dependencies → rolldown, lightningcss, postcss, ...
```

つまり **Vite 8 の本番ビルドは Rust 製の Rolldown**（Oxc ベース）が担当していて、
かつて必須だった Rollup と esbuild が依存から消えています。
「Vite = dev は esbuild + 本番は Rollup」という説明は**古い記事の内容**なので、
検索して出てきたときは日付を見てください。手元で `npm ls` するのが最速の確認方法です。

---

## 6. ハンズオン

**上から順にやること。そして必ず各フォルダの README を先に開いてください。**
「どのコマンドを叩き、DevTools のどこを見て、何を壊してみるか」が書いてあります。
このルート README が地図で、各フォルダの README が実地です。

```sh
# 0. まず素のブラウザの限界を知る
cd 00-no-bundler && npx serve .

# 1. バンドラの原理（設定が全部 JS で書いてあるので読みやすい）
cd 01-esbuild && npm run build      # dist/ を覗く
                 npm run dev        # watch + サーバー（HMR は無い）

# 2. 今の標準
cd 02-vite && npm run dev           # DevTools の Network タブを開いたまま起動する
              npm run build
              npm run preview

# 3. loader / plugin の世界
cd 03-webpack && npm run dev
                 npm run build
                 npm run build:dev  # production との出力差を見る
```

依存は 3 フォルダとも `npm install` 済みなので、いきなり動かせます。

各フォルダの README:
[00 バンドラなし](./00-no-bundler/README.md) ·
[01 esbuild](./01-esbuild/README.md) ·
[02 Vite](./02-vite/README.md) ·
[03 webpack](./03-webpack/README.md)

### 特に見てほしい 3 つの実験

**実験1: tree shaking を目で見る**

`src/utils.js` の `unused()` は、どこからも import されていません。

```sh
grep -r UNUSED_MARKER */dist --include='*.js'
```

3 つとも何もヒットしません＝落とされている。
次に `src/main.js` に `import { unused } from './utils.js'; console.log(unused());` を
足して再ビルドすると、今度はヒットします。これが tree shaking です。

**実験2: code splitting を目で見る**

`dist/` に `heavy` という名前のファイルが**別に**出来ています。
`main.js` の `await import('./heavy.js')` があるからです。
ブラウザで「動的 import する」ボタンを押した瞬間に Network タブに現れます。
静的な `import` に書き換えて再ビルドすると、chunk は消えて本体に吸収されます。

**実験3: Vite の dev サーバーが何を返しているか見る**

`cd 02-vite && npm run dev` してブラウザの Network タブを見ると、
`main.js`, `counter.js`, `utils.js`, `style.css` が**別々のリクエスト**で来ています。
`main.js` のレスポンス本文を開くと、`from 'nanoid'` が
`from '/node_modules/.vite/deps/nanoid.js'` に**書き換えられている**のが見えます。
これが「事前バンドル + import の書き換え」の実物です。

---

## 7. 実測結果（このリポジトリで実際に取った数字）

同じソース、production ビルド、source map を除く js + css の合計:

| ツール | 出力サイズ | 生成物 |
|---|---|---|
| esbuild | **1,534 B** | `main.js` / `main.css` / `heavy-*.js` |
| Vite (Rolldown) | 3,425 B | `assets/index-*.js` / `*.css` / `heavy-*.js` / `index.html` |
| webpack | 4,316 B | `main.*.js` / `main.*.css` / `*.chunk.js` / `index.html` |

**この差は「esbuild が優秀」という話ではありません。** 内訳はこう:

- webpack が大きいのは **runtime**。ビルドログの `runtime modules 7.78 KiB 14 modules` が
  それで、`__webpack_require__` と chunk 読み込み機構が埋め込まれています
  （minify 後なので出力は 3.46 KiB に収まっている）。この固定コストはアプリが
  大きくなっても増えないので、実アプリでは誤差になります。実物は
  [`03-webpack/README.md`](./03-webpack/README.md) の「見てほしいこと①」で読めます
- Vite / webpack は **`index.html` を生成し、ハッシュ付きファイル名に自動で書き換える**。
  esbuild は HTML を触らないので、`01-esbuild/index.html` は手書きでパスを書いています
  （＝ esbuild 単体は本番アプリのビルドツールとしては機能が足りない、ということ）
- 数百行のサンプルでのサイズ比較は**ほぼ意味がない**。見るべきは
  「何を自動でやってくれて、何を自分で書く必要があるか」の差です

なお webpack の `optimization.splitChunks: { chunks: 'all' }` を書いてあるのに
vendor chunk が出来ていないのは、nanoid が小さすぎて既定の `minSize`（20KB）に
届かないからです。設定は「書いたら必ず効く」わけではない、という良い例。

---

## 8. 2026年時点での選び方

| 状況 | 選ぶもの |
|---|---|
| 新規の Web アプリ | **Vite**（React/Vue/Svelte 何でも）。迷う理由がほぼ無い |
| SSR / ルーティングまで欲しい | Next.js（React）/ Nuxt（Vue）/ SvelteKit |
| npm に公開するライブラリ | **Rollup / Rolldown**、または `vite build --lib` / tsup |
| 既存の巨大 webpack プロジェクト | **Rspack** へ移行。設定がほぼ互換なので Vite 移行より圧倒的に楽 |
| ビルドスクリプトや CLI ツール | **esbuild** か tsup。設定が数行で済む |
| 静的サイト・コンテンツ中心 | Astro |

**「webpack はもう学ばなくていい」ではありません。** 理由:

- 既存プロジェクトの大半がまだ webpack（特に社内システム）
- Rspack は webpack の設定互換なので、**webpack の知識がそのまま使える**
- loader / plugin という抽象は、他のツールを理解する共通語彙になっている

学ぶ順番としては「Vite で快適に開発できる」→「webpack の設定が読める」で十分です。

---

## 9. よくあるつまずき

| 症状 | 原因 |
|---|---|
| `Failed to resolve module specifier "xxx"` | バンドラを通していない。`<script type="module">` に生の bare import |
| `Cannot use import statement outside a module` | `<script>` に `type="module"` が無い / Node で `.js` なのに `"type": "module"` 未設定 |
| `require is not defined` | CJS 前提のコードをブラウザ / ESM 環境で実行している |
| `__dirname is not defined` | ESM には無い。`import.meta.dirname` を使う |
| dev では動くのに本番で壊れる | Vite の dev/build アーキテクチャ差。`vite preview` で確認する |
| バンドルが異様に大きい | `import * as` で全部読んでいる / CJS パッケージで tree shaking が効かない |
| `process is not defined` | Node の API をブラウザ向けコードで使っている。webpack 4 は自動 polyfill していたが 5 で廃止 |
| ビルドは通るのに画面が真っ白 | source map を有効にして DevTools の Console を見る。大抵は実行時エラー |

---

## 次に読むもの

- **Vite 公式「なぜ Vite なのか」** — https://ja.vite.dev/guide/why （日本語。この README の 5 章と同じ話を公式が説明している）
- **esbuild の FAQ「なぜ速いのか」** — https://esbuild.github.io/faq/#why-is-esbuild-fast
- **webpack Concepts** — https://webpack.js.org/concepts/ （entry/output/loaders/plugins/mode の 5 本柱）
- **Rollup のドキュメント** — ライブラリを作るときに読む
