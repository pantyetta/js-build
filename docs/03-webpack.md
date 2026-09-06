# 03 — webpack：`__webpack_require__` と loader / plugin

関連: [docs トップ](./README.md) ／ 実験ノート [03-webpack/README.md](../03-webpack/README.md) ／ 前章 [02-vite.md](./02-vite.md)

---

## この章の主張

webpack の出力の冒頭に埋まっている `__webpack_require__` が、**バンドラの正体**。
「ブラウザに無いモジュールシステムを、ビルド時に自前の関数として出力へ埋め込む」——
webpack がやっていることの核心はここに全部ある。

設定は巨大な 1 オブジェクトだが、**覚えるのは 5 ブロックだけ**：

| ブロック | 役割 | 5 工程では |
|---|---|---|
| `entry` | どこから依存グラフを辿り始めるか | 入口 |
| `output` | どこに何という名前で吐くか | ⑤ Emit |
| `module.rules` | **拡張子ごとの変換方法（loader）** | ③ Transform |
| `plugins` | ビルド工程全体への介入 | 全体 |
| `optimization` | minify / tree shaking / chunk 分割 | ④ Optimize |

---

## 仕組み①：`__webpack_require__` ＝ 埋め込まれるランタイム

`webpack --mode development`（minify なし）の `dist/main.js` を開くと：

```js
var __webpack_modules__ = ({
  "./src/counter.js": ((module, exports, __webpack_require__) => { /* counter.js の中身 */ }),
  "./src/utils.js":   ((module, exports, __webpack_require__) => { /* ... */ }),
});
var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
  var cached = __webpack_module_cache__[moduleId];
  if (cached !== undefined) return cached.exports;
  var module = __webpack_module_cache__[moduleId] = { id: moduleId, exports: {} };
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);  // 登録された関数を実行
  return module.exports;
}
```

読み解くと：

1. **各モジュールが関数に包まれ、ソースパスをキーにしたオブジェクトに登録**されている。
   関数スコープなので変数がグローバルに漏れない
   → `<script>` を並べていた時代の「全部グローバル変数」問題の解決
2. `__webpack_require__` は **Node の `require` をブラウザで再実装した関数**。
   キャッシュ（`__webpack_module_cache__`）を持ち、初回だけモジュール関数を実行、
   以降は `module.exports` を使い回す。挙動が `require` そのもの
3. ソースの `import` / `export` は、webpack が `__webpack_require__(…)` 呼び出しと
   exports オブジェクトへの定義に**書き換え済み**。出力される `<script>` は
   `type="module"` ですらない、ふつうのスクリプト
4. 動的 import `import('./heavy.js')` は `__webpack_require__.e("…").then(…)` に変換。
   `.e` は「その chunk の `<script>` を実行時に足して読み込む」関数。
   だから `heavy.js` が別ファイルでも動く

### なぜこうなっているか

webpack は **2012 年生まれ**。当時ブラウザに ESM が無かったので、
モジュールシステム自体を出力に同梱するしかなかった。
esbuild / Vite の ESM 出力にはこの関数が**無い** —
ブラウザが ESM を理解するようになり、ランタイムを埋め込む必要が消えたから。
（webpack 5 も `output.module: true` で ESM 出力はできる）

### この固定コスト

development ビルドのログに `runtime modules 7.78 KiB / 14 modules` と出る。
`__webpack_require__` ＋ chunk ロード機構などで、minify 後で約 3.46 KiB。
**アプリが大きくなっても増えない**ので実アプリでは誤差。
[docs トップ](./README.md) 7 章「webpack の出力が一番大きい」の主因はこれ。

---

## 仕組み②：loader ＝「JS 以外を JS に翻訳する通訳」

webpack が原理的に理解するのは **JS だけ**。
`module.rules` で「拡張子 → どの loader を通すか」を定義する。

```js
{ test: /\.css$/i, use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'] }
```

**loader は配列の右から左（末尾 → 先頭）に適用**される（Unix パイプの逆向き）：

```
style.css
  ─▶ css-loader     CSS を読み、@import / url() を解決し、"JS モジュール" に変換
  ─▶ style-loader   その JS を「実行時に <style> を document へ挿入するコード」でラップ（dev 向き）
     └ 本番は代わりに MiniCssExtractPlugin.loader → CSS を抜き出して別の .css ファイルにする
```

順番を入れ替えると `style-loader` が生の CSS 文字列を受け取って壊れる。

**なぜ CSS を JS に変換するのか**：webpack の世界観では「全てのモジュール ＝ JS」。
`import './style.css'` が最初は奇妙に見えるのは、この一貫性のせい。
最頻出エラー `Module parse failed: Unexpected token` は
「JS 以外を JS として構文解析して失敗」＝ **対応する loader が `module.rules` に無い**。
`.vue` `.scss` `.svg` でこれが出たらこれと読み替える。

> ※ webpack 5.100 前後から `.css` は組み込み対応（module type `css`）が入り、
> css-loader なしでもビルドは通るようになった。ただし CSS Modules / PostCSS を
> 挟むなら従来通り loader が要るし、世の中の設定は今も css-loader 前提で書かれている。

画像・フォントは webpack 5 の **Asset Modules**（`type: 'asset'`）で loader 不要。
8KB 未満は data URI、それ以上はファイル出力、と自動で振り分ける。

---

## 仕組み③：plugin ＝ コンパイル全体のライフサイクルにフック

loader が「ファイル 1 個の変換」なのに対し、plugin は（tapable の）フック経由で
ビルド工程全体に介入する。

- **`HtmlWebpackPlugin`**：`index.html` をテンプレートに、出力された（ハッシュ付き）
  JS / CSS の `<script>` `<link>` を差し込んで `dist/index.html` を生成。
  → [01-esbuild](./01-esbuild.md) で手書きを強いられた部分の自動化
- **`MiniCssExtractPlugin`**：上記の loader とセットで、CSS を別ファイルに抽出して emit

このリポジトリの [index.html](../03-webpack/index.html) に `<script>` が無いのはこのため。
「ビルド後に注入されるテンプレート」であって、そのまま開くものではない。

---

## 仕組み④：`mode` が既定値を束ねる

`mode` を切り替えるだけで、以下がまとめて変わる：

| | development | production |
|---|---|---|
| minify | なし（読める） | あり |
| tree shaking | **しない** | する |
| ファイル名 | `main.js` | `main.<contenthash>.js` |
| CSS | `style-loader` で `<style>` 注入 | `MiniCssExtractPlugin` で `.css` ファイル |
| source map | `eval-cheap-module-*`（速い） | `source-map`（正確） |

「webpack は設定が多い」と言われるが、`mode` が大半を面倒見てくれる。
tree shaking が dev で効かないのは**仕様**（開発中は速さとデバッグしやすさが優先。
バンドルサイズを気にするのは本番だけ）。

---

## 仕組み⑤：optimization（chunk 分割）

- 動的 import → `src_heavy_js.chunk.js`（dev）／ `<id>.<hash>.chunk.js`（prod）
- `splitChunks: { chunks: 'all' }` → `node_modules` 由来を vendor chunk に自動分離……
  しようとするが、**既定 `minSize`（20KB）に届かない `nanoid` は分離されない**。
  「設定を書いても条件次第で効かない」例。`minSize: 0` を足すと出てくる
- prod はモジュール ID が数値化されてサイズが減る（デバッグ時は `chunkIds: 'named'` で名前を残せる）

---

## 押さえどころ

- webpack の出力 ＝ **モジュール関数の登録テーブル ＋ `__webpack_require__`（`require` の再実装）＋ アプリ本体**
- ESM が標準化されてこの「ランタイム埋め込み」が不要になった。それが esbuild / Vite の出力が軽い理由
- loader ＝ 1 ファイルの変換（右 → 左）、plugin ＝ 工程全体へのフック
- `mode` が既定値の 8 割を決める
- 新規で webpack を選ぶ理由はほぼないが、既存プロジェクトの大半が webpack で、
  **Rspack（Rust・設定互換）**に知識がそのまま移せる。学ぶ優先度は Vite の次
