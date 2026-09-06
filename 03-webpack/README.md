# 03 — webpack：loader と plugin という世界観

```sh
npm run dev        # 開発サーバー(HMR付き) → http://localhost:8080/
npm run build      # 本番ビルド（minify + CSS 別ファイル + ハッシュ）
npm run build:dev  # 開発モードのビルド（minify なし＝人間が読める）
```

`webpack.config.js` の ①〜⑤ を上から読んでください。
**覚えるのは 5 ブロックだけ**です:

| ブロック | 役割 |
|---|---|
| `entry` | どこから依存グラフを辿り始めるか |
| `output` | どこに何という名前で吐くか |
| `module.rules` | **拡張子ごとの変換方法（loader）** ← webpack の心臓部 |
| `plugins` | ビルド工程全体への介入 |
| `optimization` | minify / tree shaking / chunk 分割 |

---

## 見てほしいこと① `__webpack_require__` ＝ バンドラの正体

**これがこの章で一番大事です。**

```sh
npm run build:dev
sed -n '1,120p' dist/main.js
```

冒頭にこういうコードがいます:

```js
var __webpack_modules__ = ({
  "./src/counter.js": ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => { ... }),
  "./src/utils.js":   (...)
});

function __webpack_require__(moduleId) {
  const cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) return cachedModule.exports;
  const module = __webpack_module_cache__[moduleId] = { id: moduleId, exports: {} };
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}
```

読み解くと:

1. **各モジュールが「関数」に包まれて、パスをキーにしたオブジェクトに登録されている**
   → だからグローバルを汚さない。`<script>` を並べていた時代の問題（[docs/README.md](../docs/README.md) 1章①）の解決
2. **`__webpack_require__` は Node の `require` をブラウザで再実装した関数**
   → キャッシュを持ち、初回だけ実行して `module.exports` を返す。挙動が `require` そのもの

**これがバンドラの出自です。**「ブラウザに無いモジュールシステムを、
ビルド時に自前の関数として埋め込む」——webpack がやっていることの全部がここにあります。

`01-esbuild` や Vite の出力（ESM）にはこれがありません。
ブラウザが ESM を理解するようになったので、**もうランタイムを埋め込まなくてよくなった**からです。
webpack 5 も `output.module: true` で ESM 出力ができます。

## 見てほしいこと② production と development の差

```sh
npm run build:dev && cp dist/main.js /tmp/dev.js
npm run build
ls -la dist/
```

| | development | production |
|---|---|---|
| minify | なし（読める） | あり |
| tree shaking | **しない** | する |
| ファイル名 | `main.js` | `main.37869299.js`（contenthash） |
| CSS | `style-loader` で `<style>` に注入 | `MiniCssExtractPlugin` で `.css` ファイル |
| source map | `eval-cheap-module-*`（速い） | `source-map`（正確） |

`mode` を切り替えるだけで**これだけの既定値がまとめて変わります**。
「webpack は設定が多い」と言われますが、`mode` が大半を面倒見てくれる部分は大きい。

tree shaking が dev で効かないのは確認できます:

```sh
npm run build:dev && grep -c UNUSED_MARKER dist/main.js   # 1（残っている）
npm run build     && grep -rc UNUSED_MARKER dist/*.js     # 0（落ちている）
```

> **dev で消えないのは仕様です。** 開発中は「ビルドの速さ」と「デバッグしやすさ」が優先。
> バンドルサイズを気にするのは本番だけ。

## 見てほしいこと③ loader は右から左に適用される

```js
use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
```

配列の**末尾から先頭へ**流れます:

```
  style.css
    → css-loader        CSS を読んで @import / url() を解決し、JS モジュールに変換
    → style-loader      それを実行時に <style> として document に挿入
```

順番を入れ替えると壊れます（`style-loader` が生の CSS 文字列を受け取ってしまう）。
Unix のパイプの逆向き、と覚えると忘れません。

**なぜ CSS を「JS モジュールに変換」するのか？**
webpack が理解できるのが原則 JS だけだからです。webpack にとって全ての世界は JS で、
loader は「JS 以外を JS に翻訳する通訳」。この一貫した世界観が webpack の強さでもあり、
`import './style.css'` が最初は奇妙に見える理由でもあります。
（※ 近年の webpack は CSS だけ組み込み対応が入りました。下の実験B の補足を参照）

## 見てほしいこと④ chunk の名前

dev ビルドの出力を見てください:

```
main.js
src_heavy_js.chunk.js
vendors-node_modules_css-loader_dist_runtime_api_js-...-a6aa28.js
```

- `src_heavy_js.chunk.js` — 動的 import から生まれた chunk
- `vendors-...` — `optimization.splitChunks: { chunks: 'all' }` が
  `node_modules` 由来のコード（css-loader のランタイム）を自動で分離した結果

production ビルドではこれが `915.449c2f40.chunk.js` のような**数字の ID** になります。
サイズを削るためにモジュール ID が数値化されるからで、
デバッグしづらい時は `optimization.chunkIds: 'named'` で名前を残せます。

## 壊して学ぶ

### 実験A: nanoid を vendor chunk に追い出す

production ビルドで `vendors-*` が出来ないのは、**nanoid が小さすぎるから**です
（`splitChunks` の既定 `minSize` は 20KB）。`webpack.config.js` に足してみてください:

```js
optimization: {
  splitChunks: { chunks: 'all', minSize: 0 },
},
```

`npm run build` すると vendor chunk が現れます。
**「設定を書いたら必ず効く」わけではない**という良い教訓です。
効かないときは条件（`minSize`, `minChunks`, `test`）を疑う。

### 実験B: loader が無いとどうなるか

webpack の最頻出エラーを自分で出してみます。

```sh
echo 'hello from a text file' > src/notes.txt
# src/main.js の先頭に import './notes.txt'; を足して
npm run build
```

```
ERROR in ./src/notes.txt 1:6
Module parse failed: Unexpected token (1:6)
File was parsed as module type 'javascript/auto'.
You may need an appropriate loader to handle this file type,
currently no loaders are configured to process this file.
> 1 | hello from a text file
    |       ^
```

**「JS 以外のファイルを JS として構文解析しようとして失敗した」**が正体です。
`.vue` `.scss` `.svg` でこれが出たら「対応する loader が `module.rules` に無い」と読み替える。

`module.rules` に 1 行足せば直ります:

```js
{ test: /\.txt$/, type: 'asset/source' },
```

確認したら `src/notes.txt` と `import` を消してください。

> **補足：CSS ルールは今の webpack では必須ではありません。**
> `module.rules` の CSS ルールをコメントアウトしても、webpack 5.110 は**ビルドが通ります**。
> webpack 5.100 前後から `.css` の扱いが**組み込み**（module type `css`）になり、
> css-loader / MiniCssExtractPlugin 無しでも CSS を出力できるようになったためです。
> ただし CSS Modules や PostCSS を挟むなら従来通り loader が要りますし、
> 世の中の設定ファイルは今も css-loader 前提で書かれています。
> **「昔の記事の通りに動くとは限らない」** ——手元で確かめる癖をつけてください。

### 実験C: HMR を体感する

`npm run dev` → カウンターを 5 まで押す → `src/style.css` を編集して保存。
count が保持されたままスタイルだけ変わります（`devServer.hot: true` の効果）。
Vite と同じ体験ですが、**裏では起動時に全部バンドルしている**点が違います。

---

## webpack は今も学ぶ価値があるか

**あります。** ただし優先度は Vite の次でいい。

- 既存プロジェクトの大半がまだ webpack。特に社内システムや歴史のあるプロダクト
- **Rspack**（Rust 製）は webpack と設定互換。webpack の知識がそのまま移行先で使える
- loader / plugin という抽象は他ツールを理解する共通語彙になっている
- Next.js も長く webpack を使ってきたので、詰まった時に読む知識として効く

逆に、**新規プロジェクトで webpack を選ぶ理由はほぼありません**。
遅さは実測で 10〜100 倍の差になり、設定量も段違いです。

→ [`../docs/README.md`](../docs/README.md) の 7〜9 章（実測比較・選び方・つまずき集）へ戻る
