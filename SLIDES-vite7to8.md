# Vite 7 → 8 を入口に、JS のビルドを学び直す

> スライドデッキ `SLIDES-vite7to8.html` の内容を Markdown 化（編集用）。

> `### N. タイトル` = 1スライド ／ `*…*` = ラベル(eyebrow/kicker) ／ `> 🎤` = 発表者ノート ／ `<!-- 📊 図版 -->` = 元スライドに図あり（本文なし）。

---

## はじめに  (00–05分)

### 1. Vite 7 → 8 を入口に、JS のビルドを学び直す
*勉強会 · 70分*

Vite 8 が出た。7 と何が違う？——この具体的な問いから入って、  
**ビルドツールが中で何をやっているのか**を一段深く掘ります。

*Vite · Rollup · Rolldown · esbuild · Oxc · webpack*

> 🎤 前半（パート1）で「7 → 8 で何が変わり、実務にどう影響するか」を整理する。後半（パート2〜6）が本題の deep dive。前提知識に不安がある人は `docs/js-background.md`。

### 2. 本日の構成
*目次*

| パート | 内容 | 時間 |
|---|---|---|
| **1 · Vite の仕組み** | 開発サーバーと本番ビルドの二層構造 | 05–17 |
| **2 · Vite 7 → 8 の変更点** | 内部エンジンの置き換え、実測、更新時の確認事項 | 17–30 |
| **3 · なぜビルドが必要か** | モジュールの歴史、バンドラの成り立ち | 30–45 |
| **4 · ビルドの5工程** | Resolve / Load / Transform / Optimize / Emit | 45–52 |
| **5 · ツールの内部構造** | webpack / Rollup / Rolldown の出力と構造 | 52–68 |
| **6 · まとめ** | 5工程で振り返る、確認事項 | 68–73 |

パート1〜2 で Vite の動きと 7 → 8 の変更を具体的に確認し、パート3〜5 で「なぜそうなるのか」を掘り下げます。

> 🎤 時間が押した場合はパート5を短縮し、まとめを優先する。

### 3. 持ち帰る2点
*要点*

1. **Vite 7 → 8 の主な変更は、内部エンジンの JS 製 → Rust 製への置き換え** — 開発サーバー・本番ビルドの両方。動作モデルと設定の基本構造は変わらない。
2. **エンジンは変わっても、ビルドの5工程という骨格は変わらない** — Resolve / Load / Transform / Optimize / Emit。既存の知識は引き続き通用する。

この2点を、パート2で実測により確認し、パート6で改めて整理します。

> 🎤 この2点が全体の結論。以降はその根拠と背景。

---

## パート1 · Vite の仕組み  (05–17分)

### 4. Vite とは
*パート1 の前提*

開発サーバーと本番ビルドをまとめた、フロントエンドの開発ツール。 React / Vue / Svelte など、フレームワークを問わず使えます。

| コマンド | 内容 |
|---|---|
| npm run dev | 開発サーバーを起動する（ソースを編集しながら動作を確認） |
| npm run build | 本番用のファイルを `dist/` に生成する |
| npm run preview | 生成した本番ファイルをローカルで確認する |

- Vite 自体はバンドラではない。内部でバンドラ（現在は Rolldown）を呼ぶ
- **「開発サーバー」と「本番ビルド」は別の仕組みで動く**——これが以降の話の土台

> 🎤 この勉強会は Vite の使用経験を前提にしない。まずここで全体像を共有する。

### 5. ツールの階層：Vite と webpack の位置
*前提の確認*

<!-- 📊 図版: ツールの層構造。Vite は開発ツール一式の層、webpack はバンドラの層にあり、比較対象がずれていることを示す図 -->
*（図の補足）対等に比べるなら〔webpack ＋ webpack-dev-server ＋ 各種 loader ＋ plugin〕のセット ↔〔Vite〕。*

> 🎤 「Vite と webpack どっちがいい？」という質問が出たら、**この図に戻ってくる**。設定量の差の大半は「Vite が既定で入れてくれている分」。

### 6. Vite の二層構造：開発サーバーと本番ビルド
*Vite の全体像*

- **開発サーバー**（開発時 · vite） — **バンドルしない。**ブラウザのネイティブ ESM をそのまま使い、必要な分だけその場で変換。
- **本番ビルド**（本番 · vite build） — **バンドルする。**依存グラフを作って tree shaking / minify / code splitting。

この2つは**別々のコード**で動きます。そのため「開発では動くのに本番で問題が出る」ことが起こり得ます（リリース前に `vite preview` で確認する理由）。

> 🎤 この2層構造がパート1の中心。以降、開発サーバー側 → 本番ビルド側の順に仕組みを見る。

### 7. 開発サーバーの方式：全体バンドル と オンデマンド
*Vite の開発サーバー*

<!-- 📊 図版: webpack と Vite の開発サーバー比較。webpack は起動時にアプリ全体をバンドルして1ファイルで配信、Vite は依存だけ事前バンドルし、ソースは要求された分だけ変換して個別に配信する -->
*（図の補足）Vite の核心は「アプリのソースを事前に全部処理しない」。ブラウザのモジュール解決能力を、そのままバンドラ代わりに使っている。*

> 🎤 本スライドは時間を多めに取る。左（起動時に全体をバンドルする方式）と右（Vite の方式）のバー長の差が、起動時の待ち時間の差に対応する。

### 8. 事前バンドルと本番バンドルの理由
*2つの疑問*

- **書き換え先が要るから**（なぜ node_modules だけ） — パッケージ名を実パスに直すには、その実パスが存在しないといけない。
- **リクエスト数を抑えるため**（なぜ node_modules だけ） — lodash のようなパッケージは内部が数百モジュール。そのまま配ると数百リクエスト。
- **実回線では成立しないから**（なぜ本番はバンドル） — 非バンドル配信はローカルホストだから速いだけ。ネットワーク越しに数百リクエストは遅い。

**開発と本番で別の道を通ります。** つまり「dev では動いたのに本番で壊れる」が起こり得る、Vite の既知のトレードオフ。  
だからリリース前に `vite preview` で本番ビルドを確認します。

> 🎤 実務で効く注意点なので飛ばさない。**「preview を通してからレビュー依頼」をチームのルールにしませんか**、と提案に繋げてもいい。

---

## パート2 · Vite 7 → 8 の変更点  (17–30分)

### 9. 結論：内部エンジンの置き換え（JS 製 → Rust 製）
*まず結論*

| 処理 | Vite 7 | Vite 8 |
|---|---|---|
| 依存の事前バンドル（開発時） | esbuild | Rolldown |
| TS / JSX の変換・JS の minify | esbuild | Oxc |
| 本番のバンドル | Rollup | Rolldown |
| CSS の変換・minify | esbuild | lightningcss |

影響範囲は**開発サーバーと本番ビルドの両方**です。  
一方で、開発サーバーの動作モデル（事前バンドル → ネイティブ ESM → オンデマンド変換 → HMR）と、 設定ファイルの基本構造は変わりません。

> 🎤 Vite 8 はメジャーバージョンのため、エンジン以外の変更（対応 Node バージョン、非推奨 API の削除、一部デフォルト値の変更）も含む。移行時は公式の移行ガイドを確認する。以降、このパートで各項目を実測で確認する。

### 10. 開発時の変換結果：7 と 8 で同一
*実物 · 7 と 8 の比較*

*自分が書いたコード*

```
import { nanoid } from 'nanoid';
```

*開発サーバーが返すコード（:5273 も :5173 も）*

```
import { nanoid } from "/node_modules/.vite/deps/nanoid.js?v=xxxxxxxx";
// ?v= のハッシュだけ違う。書き換えのロジックは同一
```

- **bare specifier `'nanoid'` → 実パス**の書き換え：7 と 8 で同じ
- 相対 import（`./counter.js`）は書き換えなし：7 と 8 で同じ

書き換えのロジックは同じです。実行するエンジン（esbuild → Rolldown / Oxc）が変わっています。

> 🎤 `02b-vite7`（:5273）と `02-vite`（:5173）を同時に起動し、両者の Network タブでレスポンス本文を比較すると、書き換え結果が一致することを確認できる。

### 11. 本番バンドラの置き換え：Rollup → Rolldown
*本番ビルド*

| 処理 | Vite 7 | Vite 8 |
|---|---|---|
| 本番のバンドル | Rollup（JS 製） | **Rolldown**（Rust・Oxc ベース） |
| JS の変換・minify | esbuild | Oxc |
| CSS の変換・minify | esbuild | **lightningcss** |
| `vite` パッケージの依存 | esbuild, rollup ほか | rolldown, lightningcss ほか |

`vite.config.js` の基本構造は変わりません（`rollupOptions` という名称も維持）。Rolldown が Rollup のプラグイン API 互換を目標としているためです。

> 🎤 設定名が rollupOptions のまま維持されているのは、API 互換を保ったまま実装を置き換えるという Rolldown の設計方針による。

### 12. esbuild の役割の移管先
*本番ビルド · 続き*

Vite 7 は **Rollup と esbuild の 2 ツール構成**でした。 Rollup がバンドルを担当し、JS の変換・minify は esbuild が担当していました。  
Vite 8 では、esbuild が担っていた処理がすべて **Oxc**（Rolldown が土台とする Rust 製ツールチェーン）に移りました。

| esbuild が担当していた処理（Vite 7） | Vite 8 での担当 |
|---|---|
| 依存の事前バンドル（開発時 / `optimizeDeps`） | Rolldown |
| TS・JSX → JS の変換（開発・本番とも） | Oxc |
| 構文のダウンレベル（`build.target`） | Oxc |
| JS の minify（Vite の既定 minifier） | Oxc |

> Rolldown ＝ **Rollup の役割 ＋ esbuild の役割**を  
Rust の 1 ツール（Oxc ベース）に統合したもの。

> 🎤 「Rollup → Rolldown」と「esbuild → Oxc」は別々の移行ではなく、1 つの統合。Vite 8 の `vite` パッケージの依存から `rollup` と `esbuild` が消え、`rolldown` に置き換わることが `npm ls` で確認できる。Oxc は parser / transformer / minifier / resolver を備えた Rust 製ツールチェーン。

### 13. 実測①：依存関係とサイズ
*実測 ①*

|  | Vite 7（02b-vite7） | Vite 8（02-vite） |
|---|---|---|
| npm ls の主役 | esbuild@0.28 / rollup@4.63 | rolldown@1.2 / lightningcss@1.33 |
| インストール総数 | 16 | 17 |
| node_modules | 21 MB | 33 MB |
| modules transformed | 10 | 11 |
| entry JS / CSS / heavy | 2,744 / 320 / 188 B | 2,776 / 464 / 185 B |
| index.html | 829 B | 829 B |

サイズ・速度の差は**この規模では誤差**。CSS が少し大きいのは lightningcss が `color-scheme:light dark` を古いブラウザ向けに**トランスパイル（展開）**するから（次のスライド）。

> 🎤 `node_modules` が 21→33MB なのは rolldown / lightningcss のネイティブバイナリ（プラットフォーム別）が入るから。CI のキャッシュ設計に効くことがある、と実務向けに一言。

### 14. 実測②：出力コードに現れる差
*実測 ②*

*JS：文字列リテラルの扱い*

```
// Vite 7 = esbuild：const を保持、文字列は "..."
const r = document.createElement("link").relList;

// Vite 8 = Rolldown / Oxc：let を使い、文字列を全部 `...` に
let e = document.createElement(`link`).relList;
```

- entry JS 内のバッククォート：**Vite 7 は 8 個**（本物のテンプレートリテラルだけ）／ **Vite 8 は 84 個**（全文字列を変換）
- CSS：esbuild は**ほぼ minify だけ**（順序も保つ）／ **lightningcss は変換までやる** — `color-scheme:light dark` を `--lightningcss-*` 変数 ＋ `@media` に **lowering**（＝ minify ではなくトランスパイル）

動作は等価ですが出力の見た目は変わるため、diff レビューやスナップショットテストは影響を受けます。CSS の差分は minify ではなく **lightningcss の構文 lowering** が主因です。

> 🎤 スナップショットで dist を固定している場合、Vite 8 への更新ですべて失敗する。これは不具合ではなくエンジンの変更による出力差。lightningcss は minify に加えて、ブラウザターゲットに応じた構文の lowering も行う。差分の読み方をチームで共有しておく。

### 15. Vite 8 更新時のチェックリスト
*更新時の確認事項*

| 観点 | 内容 |
|---|---|
| アプリケーションのコード | 影響なし。`import` の記述も同じ |
| `vite.config.js` | 基本構造は同じ（`rollupOptions` 等の名称も維持）。メジャー更新のため、移行ガイドの破壊的変更（対応 Node バージョン・非推奨 API・デフォルト値）を確認する |
| 開発サーバーの動作 | 動作モデルは同じ。内部エンジンが Rolldown / Oxc に変わり、事前バンドル生成物のハッシュ等は変わる |
| `dist` のスナップショットテスト | すべて失敗する。エンジンが変わり出力の中身が変わるため。スナップショットを更新して対応する |
| CSS の出力 | lightningcss は構文の lowering も行う（`color-scheme` の展開など）。出力の差分が大きくなる場合がある |
| `node_modules` のサイズ | 約 21 MB → 約 33 MB（Rust 製バイナリを含むため）。CI のキャッシュ設定に影響する場合がある |
| Rollup プラグイン | Rolldown は API 互換を目標とするが完全ではない。使用中のプラグインの動作確認が必要 |
| 参考情報の鮮度 | 「開発は esbuild / 本番は Rollup」という記述は Vite 7 までのもの。`npm ls` で実際の依存を確認する |

変更点を把握できれば、更新の可否は判断できます。リリース前に `vite preview` で本番ビルドを確認する点は、バージョンに関わらず共通です。

> 🎤 この表がパート1の到達点。

---

## パート3 · なぜビルドが必要か  (30–45分)

### 16. なぜ「ビルド」が必要か
*後半の開始*

パート1・2 で見たとおり、Vite は内部で「ビルド」を行っています。 では、そもそもビルドとは何をする処理で、なぜ必要になったのか。  
ここを押さえると、設定ファイルとエラーメッセージが読めるようになります。

- このパート（3）：ビルドが必要になった経緯（モジュールの歴史）
- パート4：ビルドの5工程（全ツール共通の骨格）
- パート5：各ツールの内部構造（webpack / Rollup / Rolldown）

> 🎤 歴史パート。到達点は「ブラウザに無い機能を補うためにビルドが要る」。

### 17. ECMAScript と JavaScript
*前提 · 言葉の整理*

| 用語 | 指すもの |
|---|---|
| ECMAScript (ES) | 言語仕様そのもの。TC39 という委員会が策定する |
| JavaScript | その仕様を実装したもの（V8 など）の通称。実務ではほぼ同義に使う |
| ES6 = ES2015 | 2015年から**毎年**リリースに。ES6 が2015年版、以降 ES2016・ES2017… |

*「ES2015 の構文」がだいたい指すもの*

```
let / const            // var の置き換え
() => {}                // アロー関数
class X {}             // クラス構文
const { a, b } = obj   // 分割代入
import / export       // ← 今日の主役。モジュール
```

古いブラウザ（IE11 など）はこれらを**構文エラー**にした。  
だから長く「新しい構文で書いて、古い書き方に変換して配る」のが必須でした（→ あとで回収）。

> 🎤 ここは速く流す。**「ES2015 ＝ import が言語に入った年」**だけ残ればいい。IE11 の話はこのあと transpile のスライドで回収する。

### 18. <script> タグを並べていた時代
*① 2010年ごろまで*

```
<script src="jquery.js"></script>
<script src="utils.js"></script>   // jquery より後でないと動かない
<script src="app.js"></script>     // 順番を間違えると undefined
```

- **依存の順番を人間が管理する**（問題 1） — ファイルが増えるほど、正しい並びを知っている人が減っていく。
- **全部がグローバル変数**（問題 2） — どのファイルの誰が `window.foo` を書き換えたか追えない。

対策は IIFE（関数で囲う）や `window.MyApp = {}` の名前空間パターン。  
ファイル数が増えると、この方式は管理が難しくなります。

> 🎤 IIFE（即時実行関数）や名前空間オブジェクトによる分離が、この時代の定番の回避策。minify 後の出力に IIFE が残るのはその名残。

### 19. モジュールシステムの系譜（CommonJS / AMD / UMD / ESM）
*なぜ流儀が乱立しているのか*

| 方式 | 登場 | 構文 | どこ用 |
|---|---|---|---|
| CommonJS | 2009 · Node.js | require() / module.exports | サーバー |
| AMD | 2011 · RequireJS | define([deps], factory) | ブラウザ（非同期） |
| UMD | 2011頃 | 上2つ＋グローバルを全部書いた定型 | 配布ライブラリ |
| ESM | **2015 · 言語仕様** | import / export | 言語標準（今の前提） |

- **ESM だけが「静的」** — `import` は必ずファイル先頭。`if` の中には書けない
- だからバンドラは**コードを実行せずに**依存グラフを解析できる → tree shaking の前提

> 🎤 個々の方式の詳細は暗記不要。要点は「2015 年以前は言語仕様にモジュールが無く、各コミュニティが独自方式を用いていた」こと。

### 20. CommonJS による依存解決
*② 2009年 · CommonJS*

```
const utils = require('./utils');
module.exports = { foo };
```

- 依存を**書いた場所で宣言する**ので、並び順を人間が管理しなくてよくなった
- モジュールごとにスコープが閉じるので、グローバルが汚れない
- ただしこれは **Node.js のための仕様**。**ブラウザに `require` は存在しない**

> 「Node で書けるあの書き方を、ブラウザでもやりたい」

> 🎤 CommonJS がブラウザで動かない、という点が次のスライド（バンドラの成り立ち）の起点になる。

### 21. バンドラの成り立ち
*バンドラの成り立ち*

browserify（2011） → **webpack（2012）**

> バンドラは「まとめる道具」ではなく、  
ブラウザに**無いモジュールシステム**を、  
ビルド時に**自前で埋め込む**道具。

「複数ファイルが1つになる」のは、この目的を達成した**結果**にすぎません。  
——これをパート5で、実物のコードとして読みます。

> 🎤 パート5の `__webpack_require__` への伏線。「あとで本物を見せます」と予告しておくと、聞き手が待ってくれる。

### 22. ESM 標準化後もバンドラが必要な理由
*③ 2015年仕様 / 2017年ブラウザ実装*

```
import { foo } from './utils.js';
export const bar = 1;
```

ようやく言語仕様としてのモジュールが来ました。  
**それでも要ります。**理由は次の4つ。

- パッケージ名を解決できない（← **これは今も誰かがやるしかない** → 次のスライド）
- リクエスト数が急増する
- JS 以外を import できない
- 最適化されない（← **この先の transpile のスライド**）

ただし ESM の登場で、**「開発中はバンドルしない」という選択肢**が生まれました。これがパート1で見た Vite の開発サーバーの前提です。

> 🎤 ここで2本目の伏線。**ESM が来たから Vite が可能になった**、という因果が、パート1で見た Vite の設計の背景。

### 23. npm と bare specifier の解決
*④ 2010年〜 · npm*

```
npm install
  ├─ node_modules/       // パッケージの実体
  ├─ package.json        // 何を使うかの宣言（main / exports / type）
  └─ package-lock.json   // 固定バージョン
```

- パッケージの入口は `package.json` の `main` / `exports` で決まる
- **ブラウザはこの探索をしない。**`'nanoid'` → 実ファイル、を誰かが解決するしかない
- その「誰か」＝ バンドラ ／ Vite の事前バンドル。**ブラウザ単体では解決できない**

npm / yarn / pnpm が並立するのも歴史。**yarn（2016）**は当時の npm の遅さと lockfile 不在への不満、 **pnpm** は `node_modules` の重複排除が動機です。

> 🎤 「ブラウザに `node_modules` 探索は無い」と「Vite が dev で実パスに書き換える（パート1で見た）」を繋ぐ結び目。**「毎日書いてる bare import は、node_modules という仕組みに乗っている」**と一言。

### 24. トランスパイル（Babel）の役割の変遷
*⑤ 2015〜2021年ごろ · Babel 全盛*

```
const add = (a, b) => a + b;
// ↓ Babel が古いブラウザ向けに変換
var add = function (a, b) { return a + b; };
```

- 新しい構文で書きたい、でも IE11 は構文エラーにする → **ES2015→ES5 変換が必須の時代**
- **IE のサポートが2022年に終了** → 「ES5 に落とす」設定は多くの現場で不要に
- 今 transpile が残る主用途は **TypeScript → JS** と **JSX → JS**

> transpile ＝ **構文**の変換。  
polyfill ＝ 存在しない **API** を実装で埋める。別物です。

> 🎤 用語としての transpile / bundle / polyfill の整理は**パート4でやる**。ここは「Babel はなぜ生まれ、なぜ影が薄くなったか」という歴史に絞る。Babel 自体も今は SWC / Oxc に置き換わりつつある、と一言。

### 25. 年表：ビルドツールの変遷
*パート3 まとめ*

| 年 | 出来事 | 効いたこと |
|---|---|---|
| 2009 | Node.js ＋ CommonJS | `require` の書き方が広まる |
| 2010 | npm | パッケージ配布のインフラ |
| 2011 | browserify / RequireJS | 「require をブラウザで」 |
| 2012 | **webpack** | loader で CSS・画像もモジュール化 |
| 2015 | **ES2015**：ESM を言語仕様に ／ Babel 全盛 | `import` 誕生。ただし実装が追いつかず変換必須 |
| 2017 | 主要ブラウザが ESM を実装 | ネイティブで `import` が動く |
| 2020 | **Vite** / esbuild が普及 | 「開発中はバンドルしない」 |
| 2022 | IE 11 サポート終了 | ES5 へのダウンレベルがほぼ不要に |
| 2023〜 | SWC / Oxc / Rolldown / Rspack | ツールの中身が JS → Rust / Go へ |

> 道具は「壊れていたものを直す」ために積み上がった。  
だから設定項目には、必ず**直したかった何か**がある。

> 🎤 パート3の締め。**全部覚えなくていい、この流れの"形"だけ**。次のパート4で「では道具は実際に何をやっているのか」に入る、と繋ぐ。詳細版は `docs/js-background.md` にある、と案内。

---

## パート4 · ビルドの5工程  (45–52分)

### 26. ビルドの5工程
*全ツール共通の骨格*

<!-- 📊 図版: ビルドの5工程。エントリから Resolve・Load・Transform を繰り返して依存グラフを作り、Optimize と Emit でグラフ全体を出力する流れ図 -->
*（図の補足）ツールが違っても骨格は同じ。設定ファイルを読むときは「この項目は5工程のどこか」を考えると迷わない。*

> 🎤 この図が全体の見取り図。以降の用語はすべてこの 5 工程のいずれかに対応する。既存プロジェクトの設定項目がどの工程に当たるかを対応づけると理解しやすい。

### 27. 5工程で見る開発サーバーと本番ビルド
*5工程で見る*

| 工程 | 開発サーバー（`vite`） | 本番ビルド（`vite build`） |
|---|---|---|
| ① Resolve | リクエストのたびに1つずつ。bare → `/node_modules/.vite/deps/…` に書き換え | 依存グラフを**一括で**解決 |
| ② Load | 要求されたファイルだけ読む | グラフ上の全モジュールを読む |
| ③ Transform | 要求された分だけその場で（TS/JSX、CSS） | 全モジュールを変換 |
| ④ Optimize | — やらない（ブラウザにそのまま渡す） | tree shaking / minify / code splitting |
| ⑤ Emit | — 書き出さない（HTTP レスポンスで返す） | `dist/` にハッシュ名で書く ＋ `index.html` に `<link>` 注入 |

- **dev は ④⑤ をまるごと飛ばし、①②③ を「必要な分だけ」遅延実行**
- **build は 5工程を、依存グラフ全体に一気にかける**

> 7 → 8 では、③ Transform と ④ Optimize のエンジン、および開発時の事前バンドルのエンジンが置き換わりました。

> 🎤 「開発サーバーがなぜ速いか」＝ ④⑤ を行わないから、と一言で言えるように。

### 28. 用語の整理：transpile / bundle / minify ほか
*混同しやすい用語*

- **transpile（変換）**（工程 ③） — 構文を別の構文に書き換える。TS→JS、ES2022→ES2015。 **ファイルの数は変わらない。**
- **bundle（結合）**（工程 ①②） — 依存を辿って複数ファイルを束ねる。 **ファイルの数が減る。**

esbuild の設定で `bundle: false` にすると、`import` 文が **そのまま出力に残ります**。変換だけして、依存は辿っていない状態です。

| 用語 | 意味 | 混同しやすい相手 |
|---|---|---|
| polyfill | 存在しない**API**を実装で埋める（`Promise`, `fetch`） | transpile（あちらは構文の話） |
| tree shaking | どこからも使われない export を落とす | minify（あちらは縮めるだけ） |
| code splitting | 出力を複数ファイルに分ける。動的 import が起点 | bundle（逆向きの操作） |
| HMR | **状態を保ったまま**変わったモジュールだけ差し替え | live reload（ページごと再読込） |

> 🎤 tree shaking の補足：**ESM の静的解析が前提**。`require()` や `import * as _` だと効かない。「バンドルが妙に大きい」の原因の大半がこれ。

---

## パート5 · ツールの内部構造  (52–68分)

### 29. webpack の出力①：モジュールの登録
*webpack の出力 ①*

```
// dist/main.js の冒頭（development ビルド＝minify なし）
var __webpack_modules__ = ({

  "./src/counter.js": ((module, exports, __webpack_require__) => { /* … */ }),

  "./src/utils.js":   ((module, exports, __webpack_require__) => { /* … */ })

});
```

- **各モジュールが「関数」に包まれ、パスをキーにしたオブジェクトに登録されている**
- 関数の中なので、変数はグローバルに漏れない → **script タグ時代の「問題2」の解決**

> 🎤 各モジュールがファイルパスをキーとする関数として登録されている点を確認する。関数スコープにより変数がグローバルに漏れない。

### 30. webpack の出力②：__webpack_require__
*webpack の出力 ②*

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
ブラウザ用に再実装した関数です。

> 🎤 確認点：①モジュールをキャッシュする ②初回のみ実行する ③ module.exports を返す。これは Node.js の require の挙動と同じ。

### 31. バンドラの役割：モジュールシステムの埋め込み
*まとめ · バンドラの役割*

> ブラウザに無いモジュールシステムを、  
**自前の関数として出力に埋め込んでいる。**

- webpack は **2012年生まれ**。当時のブラウザには ESM が無かったので、こうするしかなかった
- esbuild や Vite の出力（ESM形式）には、この関数は**ありません**
- ブラウザが ESM を理解するようになり、**ランタイムを埋め込む必要が無くなった**ため
- webpack 5 も `output.module: true` で ESM 出力ができます

> 🎤 パート3「バンドラの成り立ち」をここで回収。「バンドラ＝まとめる道具、という説明では、なぜ ESM 時代に形が変わったのか説明できない」と言うと差が立つ。

### 32. loader / plugin という仕組み
*loader という考え方*

```
use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
       ↑ ②番目に実行         ↑ ①番目に実行（配列の末尾から先頭へ）
```

1. **css-loader** — CSS を読んで `@import` / `url()` を解決し、**JS モジュールに変換**
2. **MiniCssExtractPlugin.loader** — それを `.css` ファイルとして書き出す — （開発時は `style-loader` が `<style>` タグとして注入）

webpack にとって**世界は全部 JS**。loader は「JS 以外を JS に翻訳する通訳」です。  
`import './style.css'` が最初は奇妙に見えるのは、この世界観のせい。

> 🎤 最頻出エラー `Module parse failed: Unexpected token` ＝「JS 以外を JS として解析して失敗」＝ **対応する loader が rules に無い**。`.vue` `.scss` で出たらこれ、と教えると実務で効く。

### 33. Rollup コアの4フェーズ
*Rollup コアの構造*

| フェーズ | 中身 |
|---|---|
| ① パース | 各モジュールを AST に。**Rollup 4 はネイティブパーサ**（Rust・SWC ベース、`@rollup/rollup-*.node`）。昔は Acorn（JS製） |
| ② グラフ ＋ バインディング解析 | import を辿って依存グラフを作り、**全モジュールの変数束縛とスコープ**を解析。どの export がどこで使われるか |
| ③ tree-shaking ＋ chunk 分割 | 到達不能・副作用なしを**「文（statement）」単位**で削除（`sideEffects` / `/*#__PURE__*/` を尊重）。動的 import を境に chunk |
| ④ レンダリング | 含める文だけを**元のソース文字列のまま**繋ぎ直す。AST を出力し直すのではなく **magic-string** で必要箇所のみ編集（リネーム・削除・ラップ） |

- **コアがやらないことは全部プラグイン** — bare 解決 ／ TS・JSX 変換 ／ minify ／ CSS
- webpack と逆で、**全モジュールを1スコープに平らに展開**（スコープホイスティング）→ 名前衝突は `foo$1` にリネーム。出力が小さいのはこの方式のため

だから Vite 7 の `vite build` ＝ **Rollup コア ＋ Vite 内蔵プラグイン ＋ esbuild ＋ node-resolve**。

> 🎤 直前の webpack パート（`__webpack_require__`：各モジュールを関数で包む）と対比すると効く。Rollup は「関数で包まず、1つのスコープに畳んで名前を付け替える」。だから出力を整形すればほぼ普通のコードとして読める。

### 34. JS 製ツールの Rust / Go 製への置き換え
*いま起きている置き換え*

| これまで（JS製） | 置き換え先 | 言語 | ひとこと |
|---|---|---|---|
| Babel | SWC / Oxc / esbuild | Rust / Go | Next.js はすでに SWC |
| webpack | **Rspack** / Turbopack | Rust | **Rspack は設定がほぼ互換** |
| Rollup | **Rolldown** | Rust | Vite 8 で採用済み |
| terser | esbuild / oxc-minify | Go / Rust | — |
| ESLint | Oxlint / Biome | Rust | ビルド外だが同じ流れ |

重要なのは、**概念は何も変わっていない**ということ。  
5工程も、loader / plugin という抽象も、そのまま通用します。

> 🎤 「じゃあ今の知識は無駄になる？」への先回り。**実装言語が変わっただけで、5工程の骨格は同じ**。だから今日の話は陳腐化しない、と締める。

### 35. Rolldown の構成：コア再実装 ＋ 変換・解決の統合
*Rolldown ＝ コア再実装 ＋ 統合*

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

> 🎤 Oxc（The Oxidation Compiler）は parser / semantic / transformer / minifier / resolver / linter を揃えた Rust 製ツールチェーン。Rolldown・oxlint・Vite の内部変換が乗っている。「Rollup + esbuild + node-resolve を 1 つに統合する」ことが Rolldown の設計目標であり、パート4〜5の結論。

---

## パート6 · まとめ  (68–73分)

### 36. 5工程で見る Vite 7 → 8 の変更範囲
*パート2の整理*

| 工程 | Vite 7 → 8 での変化 |
|---|---|
| ① Resolve ／ ② Load | 外から見た動作は同じ（内部実装は Rolldown 側へ） |
| ③ Transform（TS / JSX / CSS） | JS: esbuild → Oxc ／ CSS: esbuild → lightningcss |
| ④ Optimize（bundle / tree shaking / minify / split） | Rollup → Rolldown（JS minify は Oxc、CSS minify は lightningcss） |
| ⑤ Emit | 動作は同じ（ハッシュ付きファイル名・`<link>` 注入） |
| （開発時）依存の事前バンドル | esbuild → Rolldown |

- **開発サーバーの動作モデルと、設定ファイルの基本構造は変わらない**
- ビルドの5工程という骨格も変わらない。実装言語が変わり、高速化した

変わったのは各工程を実行するエンジンであり、工程そのものではありません。

> 🎤 Rollup / Rolldown の内部構造はパート4・5で扱う。

### 37. 要点の再確認
*本日のまとめ*

1. **Vite 7 → 8 の主な変更は、内部エンジンの JS 製 → Rust 製への置き換え** — 開発時の事前バンドルと変換（esbuild → Rolldown / Oxc）、本番のバンドル（Rollup → Rolldown）、CSS 処理（esbuild → lightningcss）。開発サーバーの動作モデルと設定構造は変わらない。
2. **エンジンは変わったが、ビルドの5工程という骨格は変わらない** — Resolve / Load / Transform / Optimize / Emit。「同じ処理を、より速い実装で行う」という位置づけ。

> 変更点を把握できれば、  
更新の可否は判断できます。

手を動かす場合：`02-vite`（:5173）と `02b-vite7`（:5273）を同時に起動し、 両方を `npm run build` して `diff -rq` で出力を比較する。  
webpack を含む詳細版は `SLIDES.html`、前提知識は `docs/js-background.md`。

> 🎤 想定質問：「すぐに Vite 8 へ更新すべきか」→ 開発サーバーの動作モデルと設定構造は変わらないため影響は限定的。確認事項はスナップショットテスト、一部の Rollup プラグイン、および移行ガイドの破壊的変更。「型チェックは誰が行うか」→ esbuild も Oxc も型検査は行わない。`tsc --noEmit` を CI で別途実行する。

### 38. よくあるエラーと原因
*よくあるエラー*

| 症状 | 原因 |
|---|---|
| Failed to resolve module specifier | バンドラを通していない。生の bare import |
| Cannot use import statement outside a module | `type="module"` が無い / Node の `"type"` 未設定 |
| Module parse failed: Unexpected token | **対応する loader が `module.rules` に無い** |
| require is not defined | CJS 前提のコードを ESM 環境で実行している |
| __dirname is not defined | ESM には無い。`import.meta.dirname` を使う |
| process is not defined | Node の API をブラウザ向けコードで使用。webpack 5 で自動 polyfill 廃止 |
| dev では動くが本番で壊れる | Vite の dev / build アーキテクチャ差。`vite preview` で確認 |
| バンドルが異様に大きい | `import * as` / CJS パッケージで tree shaking が効いていない |

> 🎤 時間が押していたら**このスライドは飛ばして「資料に入ってます」で済ませる**。読み物として後で効くページ。
