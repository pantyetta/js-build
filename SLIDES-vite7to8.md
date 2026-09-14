# Vite 7 → 8 を起点とした JS ビルドの解説

> スライドデッキ `SLIDES-vite7to8.html` の内容を Markdown 化（編集用）。

> `## タイトル` = 1スライド ／ `<!-- 📊 図版 -->` = 元スライドに図あり（本文なし）。

## Vite 7 → 8 を起点とした JS ビルドの解説

Vite 8 のリリースにともなう Vite 7 との差分を起点として、JS ビルドの背景を整理する。

## 構成

| パート | 内容 |
|---|---|
| **1 · Vite とは** | viteの紹介 |
| **2 · Vite 7 の仕組み** | 開発サーバーと本番ビルドの二層構造（esbuild / Rollup） |
| **3 · Vite 7 → 8 の変更点** | 内部エンジンの置き換え、更新時の確認事項 | 
| **4 · なぜビルドが必要か** | モジュールの歴史、バンドラの成り立ち | 
| **5 · ビルドの5工程** | Resolve / Load / Transform / Optimize / Emit | 
| **6 · ツールの内部構造** | webpack / Rollup / Rolldown の出力と構造 | 
| **7 · まとめ** | 5工程で振り返る、確認事項 | 

パート1〜3 で Vite の動きと 7 → 8 の変更を具体的に確認し、パート4〜5 で「なぜそうなるのか」を掘り下げる。

## 1. Vite とは

開発サーバーと本番ビルド環境をまとめた、フロントエンドの開発ツール。
2020年4月が初期リリースの割と新しいツール。現在の最新はVite 8 (2026年3月リリース)。
React / Vue / Svelte など、フレームワークに対応しており、フレームワークのデフォルトとして採用されている。

特徴
- 開発時とビルド時で動作が変わることで、それぞれ最適化されている。
- Vite 自身がビルドを行うのではなくて、内部のバンドラをまとめている。

| コマンド | 内容 |
|---|---|
| npm run dev | 開発サーバーを起動する（ソースを編集しながら動作を確認） |
| npm run build | 本番用のファイルを `dist/` に生成する |
| npm run preview | 生成した本番ファイルをローカルで確認する |


## 2. Vite 7 の仕組み

- **開発サーバー**（`vite`） — **ソースコードのバンドルしない。**　ブラウザのネイティブ ESModule をそのまま使い、必要な分だけその場で変換。事前バンドルは **esbuild** が担当。
- **本番ビルド**（`vite build`） — **全てバンドルする。**　依存グラフを作って tree shaking / minify / code splitting。バンドル処理は **Rollup**が担当。

この2つは**別々のコード**で動くため、開発時には問題が起きず本番でのみ問題が発生する場合がある（リリース前に `vite preview` で確認するのが望ましい）。

<!-- 📊 図版: webpack と Vite の開発サーバー比較。webpack は起動時にアプリ全体をバンドルして1ファイルで配信、Vite は依存だけ事前バンドルし、ソースは要求された分だけ変換して個別に配信する -->

アプリのソースを事前に処理しないため開発サーバーの起動が速い。esbuild が事前バンドルするのは `node_modules` の依存だけで、理由は次の2つである。

- **node_modeuls配下のパスを解決するため** import { fugafuga } from 'hogehoge' -> "/node_modules/.vite/deps/hogehoge.js"
- **リクエスト数を抑えるため** lodash のようなパッケージは内部が数百モジュール。そのまま配ると数百リクエスト。


<!-- ## 5. ツールの階層：Vite と webpack の位置

📊 図版: ツールの層構造。Vite は開発ツール一式の層、webpack はバンドラの層にあり、比較対象がずれていることを示す図 -->

## 3. Vite 7 → 8 の変更点

内部エンジンの置き換え（JS、GO 製 → Rust 製）
開発ビルドと本番ビルドに使用するツール群が一新された。  
一方で、開発サーバーの動作モデル（事前バンドル → ネイティブ ESModule → オンデマンド変換 → HMR）と、 設定ファイルの基本構造は変わらない。

| 処理 | Vite 7 | Vite 8 |
|---|---|---|
| 依存の事前バンドル（開発時） | esbuild | Rolldown |
| TS / JSX の変換・JS の minify | esbuild | Oxc |
| 本番のバンドル | Rollup | Rolldown |
| CSS の変換・minify | esbuild | lightningcss |


## 3. 特に恩恵を受ける本番ビルド

本場るビルトではバンドル処理がjs -> rustに変更されたため実行速度の向上が見込まれる。
esbuild(開発ビルド)の場合は元々goで書かれているため、実行時間に変化はない。
`vite.config.js` の基本構造は変わらなず、Rolldown が Rollup 互換を目標としている。

| 処理 | Vite 7 | Vite 8 |
|---|---|---|
| 本番のバンドル | Rollup（JS 製） | **Rolldown**（Rust製 Oxc ベース） |
| JS の変換・minify | esbuild | Oxc |
| CSS の変換・minify | esbuild | **lightningcss** |
| `vite` パッケージの依存 | esbuild, rollup ほか | rolldown, lightningcss ほか |


## 4. なぜ「ビルド」が必要か

インタープリタベースの言語でなぜビルドある理由は、コンパイルではなくてフォーマット整理。

buildした結果何かしらのバイナリができるのではなくて、jsのファイルに変更されてブラウザ上で解釈される。


## 5. Viteが行っているビルド動作
viteが具体的に行っている動作は以下の通り。

| 工程 | 内容 |
| --- | --- |
| ① Resolve | 依存グラフを解決 |
| ② Load | グラフ上の全モジュールを読む |
| ③ Transform | 全モジュールを変換 (ts, react, vue, ... -> js) |
| ④ Optimize | tree shaking / minify / code splitting |
| ⑤ Emit | `dist/` にハッシュ名で書く ＋ `index.html` に `<link>` 注入 |

- dev は ①②③ を一部だけ実行して、④⑤ をまるごと飛ばす。


## 6. モジュールシステムの系譜と ESModule の仕様変遷

| 方式 | 登場 | 構文 | どこ用 |
|---|---|---|---|
| CommonJS | 2009 · Node.js | require() / module.exports | サーバー |
| AMD | 2011 · RequireJS | define([deps], factory) | ブラウザ（非同期） |
| UMD | 2011頃 | 上2つ＋グローバルを全部書いた定型 | 配布ライブラリ |
| ESModule | **2015 · 言語仕様** | import / export | 言語標準（今の前提） |

ESModule は2015年に完成したわけではなく、**その後もバージョンごとに機能が追加されている**。

| 版 / 年 | 決めた場所 | 追加されたもの |
|---|---|---|
| **ES2015** | ECMAScript | `import` / `export`、ライブバインディング（※ローダーは仕様外） |
| 2017 | HTML | `<script type="module">` が主要ブラウザで動く |
| 2019 | Node.js | `package.json` の `"type": "module"` / `exports` |
| **ES2020** | ECMAScript | `import()`（動的 import）/ `import.meta` / `export * as ns` |
| 2021〜 | HTML | Import Maps（bare specifier をブラウザで解決） |
| **ES2022** | ECMAScript | Top-level await |
| 2024 | Node.js | `require(esm)`（22.12 / 20.19〜）← Vite 7 が Node 要件を上げた理由 |
| **ES2025** | ECMAScript | Import Attributes（`with { type: "json" }`）/ JSON Modules |
| 提案中 | TC39 | `import defer`（評価の遅延）/ `import source`（WASM 向け）など |

- **ESModule だけが「静的」** — `import` は必ずファイル先頭。`if` の中には書けない（動的に読みたいときは ES2020 の `import()` を使う）
- そのため、バンドラは**コードを実行せずに**依存グラフを解析できる → tree shaking の前提
- **ファイルの探し方（ローダー）は言語仕様に含まれない** → ブラウザ・Node・バンドラがそれぞれ決める（→ 23. bare specifier）


## 20. CommonJS による依存解決

```
const utils = require('./utils');
module.exports = { foo };
```

- 依存を**書いた場所で宣言する**ので、並び順を人間が管理しなくてよくなった
- モジュールごとにスコープが閉じるので、グローバルが汚れない
- ただしこれは **Node.js のための仕様**。**ブラウザに `require` は存在しない**

> ブラウザ環境でも CommonJS と同様の記法を実現する需要が、バンドラ登場の動機となった。

## 21. バンドラの成り立ち

browserify（2011） → **webpack（2012）**

> バンドラは「まとめる道具」ではなく、  
ブラウザに**無いモジュールシステム**を、  
ビルド時に**自前で埋め込む**道具。

「複数ファイルが1つになる」のは、この目的を達成した**結果**にすぎない。

## 22. ESModule 標準化後もバンドラが必要な理由

```
import { foo } from './utils.js';
export const bar = 1;
```

ES2015 で、言語仕様としてのモジュールが策定された。

- パッケージ名を解決できない（**誰かが解決するしかない**）
- リクエスト数が急増する
- JS 以外を import できない
- 最適化されない（tree shaking / minify / code splitting が行われない）

ただし ESModule の登場で、**「開発中はバンドルしない」という選択肢**が生まれた。この前提は、Vite の開発サーバーの動作（パート2）と対応する。

## 23. npm と bare specifier の解決

```
npm install
  ├─ node_modules/       // パッケージの実体
  ├─ package.json        // 何を使うかの宣言（main / exports / type）
  └─ package-lock.json   // 固定バージョン
```

- パッケージの入口は `package.json` の `main` / `exports` で決まる
- **ブラウザはこの探索をしない。**`'nanoid'` → 実ファイル、を誰かが解決するしかない
- その「誰か」＝ バンドラ ／ Vite の事前バンドル。**ブラウザ単体では解決できない**

npm / yarn / pnpm が並立する背景にも経緯がある。**yarn（2016）**は当時の npm の遅さと lockfile 不在への不満、 **pnpm** は `node_modules` の重複排除が動機である。

## 24. トランスパイル（Babel）の役割の変遷

```
const add = (a, b) => a + b;
// ↓ Babel が古いブラウザ向けに変換
var add = function (a, b) { return a + b; };
```

- 新しい構文を使用しても IE11 では構文エラーになる → **ES2015→ES5 変換が必須の時代**
- **IE のサポートが2022年に終了** → 「ES5 に落とす」設定は多くの現場で不要に
- 今 transpile が残る主用途は **TypeScript → JS** と **JSX → JS**

> transpile ＝ **構文**の変換。  
polyfill ＝ 存在しない **API** を実装で埋める。別物である。

## 25. 年表：ビルドツールの変遷

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

> 各ツールは、既存の問題を解決するために積み上げられてきた。  
そのため、設定項目には**解決したかった課題**が存在する。

## 25b. ESLint とビルドツールの違い

- **ESLint（2013年〜）** はコードを**静的解析**し、バグになりやすい書き方やスタイル違反を検出するツール。**構文は書き換えない**（`--fix` は一部ルールに限った例外）。
- Vite / webpack などの**ビルドとは別工程**。`npm run build` の成果物 (`dist/`) の中身に ESLint は関与しない。
- 「動くコードを作る」（ビルド）と「良いコードを保つ」（lint）は目的が違う → エディタや CI 上で別途実行するのが一般的。

| ツール | 役割 |
|---|---|
| ESLint | 構文・パターンの静的解析（プラグインで拡張可能） |
| Prettier | コードの**整形**（フォーマット。lintとは別軸） |

> lint はコードの問題を実行前に検出する仕組みであり、build は動作するコードを生成する仕組みである。  
目的が異なるため、ツールも別に存在する。

---

## パート5 · ビルドの5工程

## 26. ビルドの5工程

<!-- 📊 図版: ビルドの5工程。エントリから Resolve・Load・Transform を繰り返して依存グラフを作り、Optimize と Emit でグラフ全体を出力する流れ図 -->


## 28. 用語の整理：transpile / bundle / minify ほか

- **transpile（変換）**（工程 ③） — 構文を別の構文に書き換える。TS→JS、ES2022→ES2015。 **ファイルの数は変わらない。**
- **bundle（結合）**（工程 ①②） — 依存を辿って複数ファイルを束ねる。 **ファイルの数が減る。**

esbuild の設定で `bundle: false` にすると、`import` 文が **そのまま出力に残る**。変換のみが行われ、依存関係はたどられていない状態である。

| 用語 | 意味 | 混同しやすい相手 |
|---|---|---|
| polyfill | 存在しない**API**を実装で埋める（`Promise`, `fetch`） | transpile（あちらは構文の話） |
| tree shaking | どこからも使われない export を落とす | minify（あちらは縮めるだけ） |
| code splitting | 出力を複数ファイルに分ける。動的 import が起点 | bundle（逆向きの操作） |
| HMR | **状態を保ったまま**変わったモジュールだけ差し替え | live reload（ページごと再読込） |

---

## パート6 · ツールの内部構造

## 29. webpack の出力①：モジュールの登録

```
// dist/main.js の冒頭（development ビルド＝minify なし）
var __webpack_modules__ = ({

  "./src/counter.js": ((module, exports, __webpack_require__) => { /* … */ }),

  "./src/utils.js":   ((module, exports, __webpack_require__) => { /* … */ })

});
```

- **各モジュールが「関数」に包まれ、パスをキーにしたオブジェクトに登録されている**
- 関数の中なので、変数はグローバルに漏れない → **script タグ時代の「問題2」の解決**

## 30. webpack の出力②：__webpack_require__

```
function __webpack_require__(moduleId) {
  // キャッシュにあれば、それを返す
  const cached = __webpack_module_cache__[moduleId];
  if (cached !== undefined) return cached.exports;

  const module = __webpack_module_cache__[moduleId] = { id: moduleId, exports: {} };

  // 登録されている関数を実行し、exports を埋めさせる
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  return module.exports;
}
```

> この関数は、Node の `require` を  
ブラウザ向けに再実装したものである。

## 31. バンドラの役割：モジュールシステムの埋め込み

- webpack は **2012年生まれ**。当時のブラウザには ESModule が無かったため、モジュールシステムをブラウザ向けに実装する必要があった
- esbuild や Vite の出力（ESModule形式）には、この関数は**存在しない**
- ブラウザが ESModule を理解するようになったことで、**ランタイムを埋め込む必要がなくなった**
- webpack 5 でも `output.module: true` により ESModule 出力が可能である

## 32. loader / plugin という仕組み

```
use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
       ↑ ②番目に実行         ↑ ①番目に実行（配列の末尾から先頭へ）
```

1. **css-loader** — CSS を読んで `@import` / `url()` を解決し、**JS モジュールに変換**
2. **MiniCssExtractPlugin.loader** — それを `.css` ファイルとして書き出す — （開発時は `style-loader` が `<style>` タグとして注入）

webpack の設計では、あらゆる依存が JS モジュールとして扱われる。loader は JS 以外のファイルを JS に変換する仕組みである。  
`import './style.css'` という記述は、この設計に基づくものである。

## 33. Rollup コアの4フェーズ

| フェーズ | 中身 |
|---|---|
| ① パース | 各モジュールを AST に。**Rollup 4 はネイティブパーサ**（Rust・SWC ベース、`@rollup/rollup-*.node`）。昔は Acorn（JS製） |
| ② グラフ ＋ バインディング解析 | import を辿って依存グラフを作り、**全モジュールの変数束縛とスコープ**を解析。どの export がどこで使われるか |
| ③ tree-shaking ＋ chunk 分割 | 到達不能・副作用なしを**「文（statement）」単位**で削除（`sideEffects` / `/*#__PURE__*/` を尊重）。動的 import を境に chunk |
| ④ レンダリング | 含める文だけを**元のソース文字列のまま**繋ぎ直す。AST を出力し直すのではなく **magic-string** で必要箇所のみ編集（リネーム・削除・ラップ） |

- **コアがやらないことは全部プラグイン** — bare 解決 ／ TS・JSX 変換 ／ minify ／ CSS
- webpack と逆で、**全モジュールを1スコープに平らに展開**（スコープホイスティング）→ 名前衝突は `foo$1` にリネーム。出力が小さいのはこの方式のため

以上より、Vite 7 の `vite build` は **Rollup コア ＋ Vite 内蔵プラグイン ＋ esbuild ＋ node-resolve** の組み合わせで構成される。

## 34. JS 製ツールの Rust / Go 製への置き換え

| これまで（JS製） | 置き換え先 | 言語 | ひとこと |
|---|---|---|---|
| Babel | SWC / Oxc / esbuild | Rust / Go | Next.js はすでに SWC |
| webpack | **Rspack** / Turbopack | Rust | **Rspack は設定がほぼ互換** |
| Rollup | **Rolldown** | Rust | Vite 8 で採用済み |
| terser | esbuild / oxc-minify | Go / Rust | — |
| ESLint | Oxlint / Biome | Rust | ビルド外だが同じ流れ |

重要な点は、**概念自体は変化していない**ことである。  
5工程も、loader / plugin という抽象も、そのまま通用する。

## 35. Rolldown の構成：コア再実装 ＋ 変換・解決の統合

| Rollup コアの部品 | Rolldown |
|---|---|
| SWC ベースのパーサ | Oxc パーサ |
| 自前のスコープ / バインディング解析 | Oxc の semantic 解析 |
| magic-string でのレンダリング | Rolldown 自前（Rust の文字列処理） |
| tree-shaking / chunk | Rolldown 自前（Rollup 互換の挙動が目標） |
| （esbuild プラグインが担当）変換 / minify | **Oxc の transformer / minifier を内蔵** |
| （node-resolve プラグイン） | **oxc-resolver を内蔵** |

> プラグイン API は Rollup と互換性があり、既存のプラグイン資産の大部分がそのまま動作する。  
この互換性により、`vite.config.js` の **`rollupOptions`** は Vite 8 でも維持されている。

---

## パート7 · まとめ

## 36. 5工程で見る Vite 7 → 8 の変更範囲

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

## 37. 要点の再確認

1. **Vite 7 → 8 の主な変更は、内部エンジンの JS 製 → Rust 製への置き換え** — 開発時の事前バンドルと変換（esbuild → Rolldown / Oxc）、本番のバンドル（Rollup → Rolldown）、CSS 処理（esbuild → lightningcss）。開発サーバーの動作モデルと設定構造は変わらない。
2. **エンジンは変わったが、ビルドの5工程という骨格は変わらない** — Resolve / Load / Transform / Optimize / Emit。「同じ処理を、より速い実装で行う」という位置づけ。

> 変更点を把握することで、更新の可否を判断できる。

検証手順：`02-vite`（:5173）と `02b-vite7`（:5273）を同時に起動し、両方を `npm run build` して `diff -rq` で出力を比較する。  
webpack を含む詳細版は `SLIDES.html`、前提知識は `docs/js-background.md`。