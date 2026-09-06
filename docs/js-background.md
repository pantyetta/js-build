# 前提知識：この教材が「知っている前提」にしている JS の常識と歴史

関連: [docs トップ](./README.md) ／ 用語の混同は [README.md](./README.md) 3 章 ／ ESM の詳細は [question.md](../question.md)

---

## この章の主張

本編（00〜03）は **「モジュール」「ESM」「npm」「トランスパイル」を知っている前提**で
書いてある。ここはその前提を最短で埋めるための章。
**設定ファイルが読めない・記事の用語が飛ばし飛ばしにしか分からない**、という状態を
解消するのが目的で、手を動かす部分は無い。

ビルドツールは「壊れていたものを直すために積み上がってきた」ので、
**何が壊れていたか（歴史）が分かると、設定項目が「なぜ在るのか」で読める**ようになる。

---

## 1. JavaScript と ECMAScript

| 用語 | 指すもの |
|---|---|
| **ECMAScript (ES)** | 言語仕様そのもの。ECMA International の TC39 が策定する |
| **JavaScript** | その仕様を実装したもの（V8, SpiderMonkey…）の通称。実務ではほぼ同義で使う |
| **ES6 = ES2015** | 2015 年から**毎年**リリースになった。ES6 が 2015 年版、以降 ES2016, ES2017… |

「**ES2015 の構文**」と言うとき、だいたい以下を指す。本編でも頻出する：

```js
let / const                          // var の置き換え
() => {}                             // アロー関数
class X {}                           // クラス構文
`${x}`                               // テンプレートリテラル
const { a, b } = obj                 // 分割代入
import / export                      // ★ モジュール（この教材の主役）
```

古いブラウザ（IE11 など）はこれらを**構文エラー**にした。
だから長らく「ES2015 で書いて ES5 に変換して配る」のが必須だった（→ 4 章）。

---

## 2. 「モジュール」以前：なぜモジュールが要るのか

昔のブラウザ JS には**モジュールの仕組みが言語に無かった**。ファイル分割は
`<script>` を並べるだけで、2 つの問題があった。

```html
<script src="jquery.js"></script>
<script src="utils.js"></script>   <!-- jquery より後でないと動かない -->
<script src="app.js"></script>     <!-- 順番管理は人間の仕事 -->
```

1. **依存の順番を人間が管理する**
2. **全部がグローバル変数**（`window` に生える）＝ 名前衝突

当時の対策（今でも minify 後の出力で見かける）：

| パターン | やること |
|---|---|
| **IIFE** `(function(){ ... })()` | 関数で囲ってローカルスコープを作り、グローバル汚染を防ぐ |
| **namespace パターン** `window.MyApp = {}` | 名前空間オブジェクト 1 個だけをグローバルに置く |
| **jQuery プラグイン形式** | `$.fn.xxx` に生やす |

---

## 3. モジュールシステムの系譜

言語に無かったので、**各コミュニティが独自に発明した**。これが「なぜ乱立しているのか」。

| 方式 | 登場 | 構文 | 特徴 | どこ用 |
|---|---|---|---|---|
| **CommonJS (CJS)** | 2009, Node.js | `require()` / `module.exports` | 同期。実行時に解決 | サーバー（Node） |
| **AMD** | 2011, RequireJS | `define([deps], factory)` | 非同期。ブラウザで動く | ブラウザ |
| **UMD** | 2011 頃 | 上 2 つ + グローバルの分岐を全部書いた定型 | どこでも動く（が汚い） | 配布用ライブラリ |
| **ESM** | 2015, 言語仕様 | `import` / `export` | **静的**。パース時に依存が確定 | 言語標準（今の前提） |

- **CommonJS** は Node が採用したことで事実上の標準になった。
  「Node のあの書き方をブラウザでもやりたい」→ バンドラ（browserify / webpack）の出発点（→ 6 章）
- **ESM の「静的」が現代の最適化の土台**。`import` は必ずファイル先頭・`if` の中に書けない
  → バンドラは**コードを実行せずに**依存グラフを解析できる → tree shaking が成立
- CJS と ESM の詳細比較は [question.md](../question.md) の「ES module とは？」節

---

## 4. トランスパイル：なぜ Babel があったか

**transpile = 構文を別の構文に変換する**（ファイル数は変わらない。束ねる bundle とは別物）。

### 2015〜2021 頃：ES2015 → ES5 変換が必須だった時代

- 新しい構文（`=>`, `class`, `const`…）で書きたい
- でも IE11 や古いスマホブラウザは**構文エラーにする**
- → **Babel** が「新しい構文で書いたコードを、古いブラウザが読める書き方に落とす」

```js
const add = (a, b) => a + b;
// ↓ Babel が ES5 に変換
var add = function (a, b) { return a + b; };
```

### 今：構文のダウンレベルの必要性は激減した

- **IE のサポートが 2022 年に終了**。モダンブラウザは ES2015〜2020 くらいをそのまま読む
- だから「ES5 に落とす」設定は多くのプロジェクトで不要になった（`target` を新しめに）

### それでも transpile が残る理由

| 用途 | 内容 |
|---|---|
| **TypeScript → JS** | 型注釈を消す（→ 5 章） |
| **JSX → JS** | `<div/>` を `React.createElement(...)` に |
| **ごく新しい提案構文** | デコレータなど、まだブラウザ未実装のもの |
| **polyfill の注入** | 構文ではなく **API**（`Promise`, `fetch`, `Array.flat`）を補う。core-js。transpile とは別軸 |

> **transpile（構文）と polyfill（API）は別物**。`=>` は構文なので Babel が変換、
> `Promise` は API なので実装（polyfill）を足す。混同しやすいので [README.md](./README.md) 3 章も参照。

Babel（JS 製）も、いまは **SWC / Oxc / esbuild**（Rust / Go 製）に置き換わりつつある。

---

## 5. TypeScript / JSX：「JS じゃないもの」を書く

- **TypeScript**：JS に型を足した言語。**ブラウザも Node も直接は実行できない**
  → 型を消して JS にする変換が要る（tsc / esbuild / SWC）
- **JSX**：`return <App />` のような JS 内に書く HTML 風構文。React 発。これも変換が要る
- **Vue SFC (`.vue`) / Svelte (`.svelte`)**：1 ファイルに template + script + style

これらが「ビルドの Transform 工程がなぜ要るか」の代表例。
ブラウザにとっては全部「パースできない JS」＝ [00 章](./00-no-bundler.md)の「JS 以外を import できない」。

---

## 6. バンドラの登場：browserify → webpack

**バンドラ = `import` / `require` を辿って、多数のファイルを少数のファイルに束ねるプログラム。**

出自は「複数ファイルを 1 つにする道具」というより、
**「ブラウザに無いモジュールシステムを、ビルド時に解決して埋め込む道具」**：

| 年 | 出来事 |
|---|---|
| 2011 | **browserify** — Node の `require()` で書いたコードをブラウザで動かす |
| 2012 | **webpack** — require に加えて CSS も画像も「モジュール」として扱う（loader） |
| 2015 | **Rollup** — ESM 前提。tree shaking を打ち出す。ライブラリ向けに強い |
| 2017 | **Parcel** — 設定ゼロを売りにした |
| 2020 | **esbuild** — Go 製。webpack の 10〜100 倍速い |
| 2020 | **Vite** — 「dev は非バンドル、本番だけバンドル」（→ [README.md](./README.md) 5 章） |
| 2023〜 | **Rolldown / Rspack / Turbopack** — Rust 製への置き換え |

各ツールが実際にやる 5 工程（Resolve / Load / Transform / Optimize / Emit）は
[README.md](./README.md) 2 章。

---

## 7. npm と node_modules

- **npm** = Node のパッケージマネージャ（2010〜）。今や JS 全体の共有インフラ
- `npm install` → **`node_modules/`** にパッケージ実体、**`package.json`** に宣言、
  **`package-lock.json`** に固定バージョン
- パッケージの入口は `package.json` の `main` / `module` / `exports` フィールドで決まる

### これが `bare specifier` 問題に直結する

```js
import { nanoid } from 'nanoid';   // ← 'nanoid' は bare specifier（パッケージ名）
```

ブラウザには「`nanoid` を `node_modules` のどのファイルに対応させるか」のルールが無い。
**この解決を代わりにやるのがバンドラ（と Vite の事前バンドル）** の中心的な仕事の 1 つ。
詳細は [question.md](../question.md) の「bare specifier とは？」節。

### パッケージマネージャも 3 つある

| ツール | 出た理由 |
|---|---|
| **npm** | 標準。最初からある |
| **yarn**（2016） | 当時の npm が遅い・lockfile が無かったのを改善 |
| **pnpm** | `node_modules` の重複を無くしてディスク節約 + 依存の厳密化 |

---

## 8. なぜ今も「束ねる」のか：HTTP のコスト

ESM がブラウザで動くなら束ねなくていい気がするが、**要る**。理由はネットワーク：

- **1 モジュール = 1 リクエスト**。実務規模だと数百〜数千
- `main → counter → utils` とネストが深いほど「取得 → パース → 次の import 発見 → 取得」が
  直列化する（**ウォーターフォール**）
- **HTTP/2 の多重化でも往復回数はゼロにならない**
- localhost では成立する戦略（＝ Vite の dev サーバー）も、実回線では遅すぎる

だから **dev は非バンドルでよくても、本番はバンドルする**（→ [README.md](./README.md) 5 章）。

---

## 9. 年表（1 枚）

| 年 | 出来事 | 影響 |
|---|---|---|
| 1995 | JavaScript 誕生 | — |
| 2009 | **Node.js** + CommonJS | サーバーで JS。`require` の書き方が広まる |
| 2010 | **npm** | パッケージ配布のインフラ |
| 2011 | browserify / RequireJS(AMD) | 「require をブラウザで」 |
| 2012 | **webpack** | loader で CSS・画像もモジュール化 |
| 2015 | **ES2015**：ESM を言語仕様に / **Babel** 全盛 | `import`/`export` 誕生。だが実装が追いつかず変換が必須 |
| 2016 | yarn | npm の改善圧 |
| 2017 | 主要ブラウザが **ESM を実装**（`<script type="module">`） | ネイティブで import が動くように |
| 2019〜20 | Node が ESM を安定サポート（`"type": "module"`） | フロント/バックで書き方が揃う |
| 2020 | **Vite** / esbuild が普及 | 「dev 非バンドル」という発想 |
| 2022 | **IE 11 サポート終了** | ES5 へのダウンレベルがほぼ不要に |
| 2023〜 | SWC / Oxc / **Rolldown** / Rspack / Turbopack | ツールの中身が JS → Rust/Go へ |

---

## 押さえどころ

- **ECMAScript = 仕様、JavaScript = 実装**。ES6 = ES2015、以降は毎年。
- 言語にモジュールが無かった → **CommonJS / AMD / UMD が乱立** → 2015 で **ESM が標準**。
- **ESM は「静的」**。だからビルドツールは実行せずに依存を解析でき、tree shaking が効く。
- **バンドラの出自は「ブラウザに無い機能をビルド時に埋める」**。単に束ねる道具ではない。
- **npm / node_modules** があるから `import 'nanoid'`（bare specifier）が書ける。
  その解決がバンドラの中心仕事。
- **transpile（構文）と polyfill（API）は別軸**。IE 終了で構文変換の必要性は激減、
  今の transpile はほぼ TS / JSX のため。
- HTTP のリクエストコストがあるので、**本番は今も束ねる**。

この 7 点が頭に入っていれば、[README.md](./README.md) 以降は詰まらずに読める。
