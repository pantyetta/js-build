# Vite 7 → 8 を入口に、JS のビルドを学び直す

> スライドデッキ `SLIDES-vite7to8.html` の内容を Markdown 化（編集用）。

> `## タイトル` = 1スライド ／ `<!-- 📊 図版 -->` = 元スライドに図あり（本文なし）。

## Vite 7 → 8 を入口に、JS のビルドを学び直す

Vite 8 が出た。7 と何が違う？——この具体的な問いから入って、

## 本日の構成

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

この2つは**別々のコード**で動くため、「開発では動くのに本番で問題が出る」ことが起こりえる（リリース前に `vite preview` で確認するのが望ましい）。

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


## 12. esbuild の役割の移管先

Vite 7 は **Rollup と esbuild の 2 ツール構成**だった。 Rollup がバンドルを担当し、JS の変換・minify は esbuild が担当していた。  
Vite 8 では、esbuild が担っていた処理がすべて **Oxc**（Rolldown が土台とする Rust 製ツールチェーン）に移った。

| esbuild が担当していた処理（Vite 7） | Vite 8 での担当 |
|---|---|
| 依存の事前バンドル（開発時 / `optimizeDeps`） | Rolldown |
| TS・JSX → JS の変換（開発・本番とも） | Oxc |
| 構文のダウンレベル（`build.target`） | Oxc |
| JS の minify（Vite の既定 minifier） | Oxc |

> Rolldown ＝ **Rollup の役割 ＋ esbuild の役割**を  
Rust の 1 ツール（Oxc ベース）に統合したもの。


## パート4 · なぜビルドが必要か

## 16. なぜ「ビルド」が必要か

パート1〜3 で見たとおり、Vite は内部で「ビルド」を行っている。 では、そもそもビルドとは何をする処理で、なぜ必要になったのか。  
ここを押さえると、設定ファイルとエラーメッセージが読めるようになる。

- このパート（4）：ビルドが必要になった経緯（モジュールの歴史）
- パート5：ビルドの5工程（全ツール共通の骨格）
- パート6：各ツールの内部構造（webpack / Rollup / Rolldown）

## 17. ECMAScript と JavaScript

| 用語 | 指すもの |
|---|---|
| ECMAScript (ES) | 言語仕様そのもの。TC39 という委員会が策定する |
| JavaScript | その仕様を実装したもの（V8 など）の通称。実務ではほぼ同義に使う |
| ES6 = ES2015 | 2015年から**毎年**リリースに。ES6 が2015年版、以降 ES2016・ES2017… |

```
let / const            // var の置き換え
() => {}                // アロー関数
class X {}             // クラス構文
const { a, b } = obj   // 分割代入
import / export       // ← 今日の主役。モジュール
```

古いブラウザ（IE11 など）はこれらを**構文エラー**にした。  
だから長く「新しい構文で書いて、古い書き方に変換して配る」のが必須だった（→ あとで回収）。

## 18. \<script> タグを並べていた時代

```
<script src="jquery.js"></script>
<script src="utils.js"></script>   // jquery より後でないと動かない
<script src="app.js"></script>     // 順番を間違えると undefined
```

- **依存の順番を人間が管理する**（問題 1） — ファイルが増えるほど、正しい並びを知っている人が減っていく。
- **全部がグローバル変数**（問題 2） — どのファイルの誰が `window.foo` を書き換えたか追えない。

対策は IIFE（関数で囲う）や `window.MyApp = {}` の名前空間パターン。  
ファイル数が増えると、この方式は管理が難しくなる。

## 19. モジュールシステムの系譜（CommonJS / AMD / UMD / ESModule）

| 方式 | 登場 | 構文 | どこ用 |
|---|---|---|---|
| CommonJS | 2009 · Node.js | require() / module.exports | サーバー |
| AMD | 2011 · RequireJS | define([deps], factory) | ブラウザ（非同期） |
| UMD | 2011頃 | 上2つ＋グローバルを全部書いた定型 | 配布ライブラリ |
| ESModule | **2015 · 言語仕様** | import / export | 言語標準（今の前提） |

- **ESModule だけが「静的」** — `import` は必ずファイル先頭。`if` の中には書けない
- だからバンドラは**コードを実行せずに**依存グラフを解析できる → tree shaking の前提

## 20. CommonJS による依存解決

```
const utils = require('./utils');
module.exports = { foo };
```

- 依存を**書いた場所で宣言する**ので、並び順を人間が管理しなくてよくなった
- モジュールごとにスコープが閉じるので、グローバルが汚れない
- ただしこれは **Node.js のための仕様**。**ブラウザに `require` は存在しない**

> 「Node で書けるあの書き方を、ブラウザでもやりたい」

## 21. バンドラの成り立ち

browserify（2011） → **webpack（2012）**

> バンドラは「まとめる道具」ではなく、  
ブラウザに**無いモジュールシステム**を、  
ビルド時に**自前で埋め込む**道具。

「複数ファイルが1つになる」のは、この目的を達成した**結果**にすぎない。  
——これをパート6で、実物のコードとして読む。

## 22. ESModule 標準化後もバンドラが必要な理由

```
import { foo } from './utils.js';
export const bar = 1;
```

ようやく言語仕様としてのモジュールが来た。

- パッケージ名を解決できない（← **これは今も誰かがやるしかない** → 次のスライド）
- リクエスト数が急増する
- JS 以外を import できない
- 最適化されない（← **この先の transpile のスライド**）

ただし ESModule の登場で、**「開発中はバンドルしない」という選択肢**が生まれた。これがパート2で見た Vite の開発サーバーの前提である。

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

npm / yarn / pnpm が並立するのも歴史。**yarn（2016）**は当時の npm の遅さと lockfile 不在への不満、 **pnpm** は `node_modules` の重複排除が動機である。

## 24. トランスパイル（Babel）の役割の変遷

```
const add = (a, b) => a + b;
// ↓ Babel が古いブラウザ向けに変換
var add = function (a, b) { return a + b; };
```

- 新しい構文で書きたい、でも IE11 は構文エラーにする → **ES2015→ES5 変換が必須の時代**
- **IE のサポートが2022年に終了** → 「ES5 に落とす」設定は多くの現場で不要に
- 今 transpile が残る主用途は **TypeScript → JS** と **JSX → JS**

> transpile ＝ **構文**の変換。  
polyfill ＝ 存在しない **API** を実装で埋める。別物だ。

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

> 道具は「壊れていたものを直す」ために積み上がった。  
だから設定項目には、必ず**直したかった何か**がある。

---

## パート5 · ビルドの5工程

## 26. ビルドの5工程

<!-- 📊 図版: ビルドの5工程。エントリから Resolve・Load・Transform を繰り返して依存グラフを作り、Optimize と Emit でグラフ全体を出力する流れ図 -->

## 27. 5工程で見る開発サーバーと本番ビルド

| 工程 | 開発サーバー（`vite`） | 本番ビルド（`vite build`） |
|---|---|---|
| ① Resolve | リクエストのたびに1つずつ。bare → `/node_modules/.vite/deps/…` に書き換え | 依存グラフを**一括で**解決 |
| ② Load | 要求されたファイルだけ読む | グラフ上の全モジュールを読む |
| ③ Transform | 要求された分だけその場で（TS/JSX、CSS） | 全モジュールを変換 |
| ④ Optimize | — やらない（ブラウザにそのまま渡す） | tree shaking / minify / code splitting |
| ⑤ Emit | — 書き出さない（HTTP レスポンスで返す） | `dist/` にハッシュ名で書く ＋ `index.html` に `<link>` 注入 |

- **dev は ④⑤ をまるごと飛ばし、①②③ を「必要な分だけ」遅延実行**
- **build は 5工程を、依存グラフ全体に一気にかける**

> 7 → 8 では、③ Transform と ④ Optimize のエンジン、および開発時の事前バンドルのエンジンが置き換わった。

## 28. 用語の整理：transpile / bundle / minify ほか

- **transpile（変換）**（工程 ③） — 構文を別の構文に書き換える。TS→JS、ES2022→ES2015。 **ファイルの数は変わらない。**
- **bundle（結合）**（工程 ①②） — 依存を辿って複数ファイルを束ねる。 **ファイルの数が減る。**

esbuild の設定で `bundle: false` にすると、`import` 文が **そのまま出力に残る**。変換だけして、依存は辿っていない状態だ。

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

> これは、Node の `require` を  
ブラウザ用に再実装した関数だ。

## 31. バンドラの役割：モジュールシステムの埋め込み

> ブラウザに無いモジュールシステムを、

- webpack は **2012年生まれ**。当時のブラウザには ESModule が無かったので、こうするしかなかった
- esbuild や Vite の出力（ESModule形式）には、この関数は**ない**
- ブラウザが ESModule を理解するようになり、**ランタイムを埋め込む必要が無くなった**ため
- webpack 5 も `output.module: true` で ESModule 出力ができる

## 32. loader / plugin という仕組み

```
use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
       ↑ ②番目に実行         ↑ ①番目に実行（配列の末尾から先頭へ）
```

1. **css-loader** — CSS を読んで `@import` / `url()` を解決し、**JS モジュールに変換**
2. **MiniCssExtractPlugin.loader** — それを `.css` ファイルとして書き出す — （開発時は `style-loader` が `<style>` タグとして注入）

webpack にとって**世界は全部 JS**。loader は「JS 以外を JS に翻訳する通訳」だ。  
`import './style.css'` が最初は奇妙に見えるのは、この世界観のせい。

## 33. Rollup コアの4フェーズ

| フェーズ | 中身 |
|---|---|
| ① パース | 各モジュールを AST に。**Rollup 4 はネイティブパーサ**（Rust・SWC ベース、`@rollup/rollup-*.node`）。昔は Acorn（JS製） |
| ② グラフ ＋ バインディング解析 | import を辿って依存グラフを作り、**全モジュールの変数束縛とスコープ**を解析。どの export がどこで使われるか |
| ③ tree-shaking ＋ chunk 分割 | 到達不能・副作用なしを**「文（statement）」単位**で削除（`sideEffects` / `/*#__PURE__*/` を尊重）。動的 import を境に chunk |
| ④ レンダリング | 含める文だけを**元のソース文字列のまま**繋ぎ直す。AST を出力し直すのではなく **magic-string** で必要箇所のみ編集（リネーム・削除・ラップ） |

- **コアがやらないことは全部プラグイン** — bare 解決 ／ TS・JSX 変換 ／ minify ／ CSS
- webpack と逆で、**全モジュールを1スコープに平らに展開**（スコープホイスティング）→ 名前衝突は `foo$1` にリネーム。出力が小さいのはこの方式のため

だから Vite 7 の `vite build` ＝ **Rollup コア ＋ Vite 内蔵プラグイン ＋ esbuild ＋ node-resolve**。

## 34. JS 製ツールの Rust / Go 製への置き換え

| これまで（JS製） | 置き換え先 | 言語 | ひとこと |
|---|---|---|---|
| Babel | SWC / Oxc / esbuild | Rust / Go | Next.js はすでに SWC |
| webpack | **Rspack** / Turbopack | Rust | **Rspack は設定がほぼ互換** |
| Rollup | **Rolldown** | Rust | Vite 8 で採用済み |
| terser | esbuild / oxc-minify | Go / Rust | — |
| ESLint | Oxlint / Biome | Rust | ビルド外だが同じ流れ |

重要なのは、**概念は何も変わっていない**ということ。  
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

> プラグイン API は Rollup 互換。既存のプラグイン資産がほぼ動く。  
だから `vite.config.js` の **`rollupOptions`** が Vite 8 でも残っている。

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

> 変更点を把握できれば、  
更新の可否は判断できる。

手を動かす場合：`02-vite`（:5173）と `02b-vite7`（:5273）を同時に起動し、 両方を `npm run build` して `diff -rq` で出力を比較する。  
webpack を含む詳細版は `SLIDES.html`、前提知識は `docs/js-background.md`。
