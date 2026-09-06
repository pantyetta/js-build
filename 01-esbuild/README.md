# 01 — esbuild：バンドラの原理を一番薄いレイヤーで見る

設定が全部ふつうの JS（`build.mjs`）で書いてあるので、**まずこれを読むのが一番わかりやすい**。
webpack や Vite の設定項目も、結局はここにある概念の言い換えです。

```sh
npm run build     # 本番ビルド（minify あり）→ dist/
npm run dev       # watch + 開発サーバー → http://127.0.0.1:8000/
```

`build.mjs` の ①〜⑥ のコメントを、上から順に読んでください。

## 見てほしいこと

### 1. `analyzeMetafile` の出力＝「何がどれだけ入ったか」

`npm run build` するとこう出ます:

```
  dist/main.js                                  892b   100.0%
   ├ src/main.js                                537b    60.2%
   ├ src/counter.js                             107b    12.0%
   ├ node_modules/nanoid/index.browser.js       105b    11.8%
   ├ node_modules/nanoid/url-alphabet/index.js   73b     8.2%
   └ src/utils.js                                36b     4.0%

  dist/main.css                                 357b   100.0%
  dist/heavy-W36QH2EI.js                        285b   100.0%
```

読み方:

- **`node_modules/nanoid/...` が `dist/main.js` の中にいる** — これがバンドルの正体。
  `import { nanoid } from 'nanoid'` が、ライブラリのコードそのものに置き換わっている
- **`src/heavy.js` が別ファイル**になっている — 動的 import による code splitting
- **`.css` が別の出力先** — `loader: { '.css': 'css' }` の指定で CSS として集約された

「バンドルが大きい」と言われたときに、**どのモジュールが太っているかを特定する**のがこの機能です。
webpack なら `webpack-bundle-analyzer`、Vite なら `rollup-plugin-visualizer` が同じ役割。

### 2. 出力ファイルを実際に開く

```sh
cat dist/main.js
```

`nanoid` のコードが**インライン展開されて 1 ファイルに畳み込まれている**のが見えます。
`import` 文はもう残っていません（`heavy.js` への動的 import だけが残る）。

さらに **`dist/heavy-W36QH2EI.js` のハッシュに注目**。
esbuild は splitting で切り出した chunk には自動でハッシュを付けますが、
`main.js` には付けません。ここは自分で `entryNames: '[name]-[hash]'` を書く必要があります。

### 3. esbuild は HTML を触らない

`index.html` を見てください。`./dist/main.js` と `./dist/main.css` を**手書き**しています。

これが esbuild 単体の限界です。ハッシュ付きファイル名にした瞬間、
HTML のパスを手で書き換えられなくなる（＝ プラグインを自作するか、別ツールが要る）。

> **だから Vite が生まれた**、とも言えます。
> Vite は「esbuild/Rolldown の速さ + HTML 処理 + dev サーバー + HMR + 設定済みの諸々」のパック。
> `03-webpack` では `HtmlWebpackPlugin` が同じ仕事をしています。

## 壊して学ぶ

### 実験A: `bundle: false` にする

`build.mjs` の `bundle: true` を `false` に変えて `npm run build`。

```sh
cat dist/main.js
```

`import { nanoid } from "nanoid";` が**そのまま残ります**。ブラウザで開くと
`Failed to resolve module specifier "nanoid"` で落ちる。

- `bundle: false` = **transpile だけ**（構文変換のみ、依存は辿らない）
- `bundle: true` = **transpile + 依存解決 + 結合**

[docs/README.md](../docs/README.md) の用語辞典にある「transpile と bundle は別物」が、これで体感できます。
確認したら `true` に戻してください。

### 実験B: tree shaking を消す

`src/main.js` の先頭に足す:

```js
import { unused } from './utils.js';
console.log(unused());
```

`npm run build` してから:

```sh
grep -c UNUSED_MARKER dist/main.js    # 1 になる（＝ 出力に含まれた）
```

足す前は 0 です。**使われていない export は落ちる**＝ tree shaking。
確認したら消してください。

### 実験C: splitting を切る

`splitting: false` にすると `heavy-*.js` が消え、`main.js` に吸収されます。
「動的 import する」ボタンは動きますが、**最初のダウンロードに全部含まれる**ようになる。
これが code splitting の有無の差です。

## esbuild の立ち位置

| 得意 | 苦手 |
|---|---|
| 速い（Go 製・並列）。この規模で数十 ms | HMR が無い |
| 設定が JS で書けて見通しがいい | HTML を扱えない |
| CLI / ライブラリ / Lambda のバンドルに最適 | CSS の高度な処理（CSS Modules 等）が弱い |
| Vite など他ツールの内部エンジンとして採用実績多数 | プラグイン API が Rollup ほど成熟していない |

**アプリのビルドツールとしては使わず、ツールチェーンの部品として使う**のが現在の定番です。

→ 次は `../02-vite`
