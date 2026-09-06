# 01 — esbuild：バンドラの 5 工程を最小構成で見る

関連: [docs トップ](./README.md) ／ 実験ノート [01-esbuild/README.md](../01-esbuild/README.md) ／ 前章 [00-no-bundler.md](./00-no-bundler.md) ・ 次章 [02-vite.md](./02-vite.md)

---

## この章の主張

どのバンドラも、やっているのは **Resolve → Load → Transform → Optimize → Emit** の 5 工程。
esbuild はこれを、ふつうの JS スクリプト（[build.mjs](../01-esbuild/build.mjs)）として
そのまま読める。webpack の設定項目も Vite のプラグイン API も、結局この 5 工程の言い換え。

esbuild は「設定ファイル」ではなく **JS API（`esbuild.build(options)`）を呼ぶ**のが基本スタイル。
何が起きているかが一番はっきり見えるので、まずここから読むのがいい。

---

## 仕組み：`esbuild.build(options)` 一発で何が起きるか

```
entryPoints: ['src/main.js']
      │
 ┌────▼─────────┐
 │ ① Resolve    │  "./utils.js" や "nanoid" が、ディスク上のどのファイルか決める
 └────┬─────────┘   ・相対指定子 "./counter.js" → パスとして解決
      │             ・bare specifier "nanoid" → Node の解決アルゴリズムを内蔵。
      │               node_modules/nanoid/package.json の exports / browser を見て
      │               node_modules/nanoid/index.browser.js に解決する
 ┌────▼─────────┐
 │ ② Load       │  解決したパスのファイルを読む
 └────┬─────────┘
 ┌────▼─────────┐
 │ ③ Transform  │  拡張子ごとに loader を適用（下記）
 └────┬─────────┘
      │   ①〜③ を、見つかった import すべてについて繰り返して 依存グラフ を完成させる
 ┌────▼─────────┐
 │ ④ Optimize   │  tree shaking / minify / code splitting
 └────┬─────────┘
 ┌────▼─────────┐
 │ ⑤ Emit       │  dist/ に書き出す ＋ metafile（解析用 JSON）
 └──────────────┘
```

### ③ Transform：loader ＝「拡張子 → 扱い方」の対応表

```js
loader: {
  '.css': 'css',      // CSS 専用パイプラインへ。CSS 内の @import / url() も辿る
  '.svg': 'dataurl',  // data URI に変換して JS に埋め込む
  '.png': 'file',     // ファイルとして出力し、その URL を返す
}
```

`.js` は「JS としてパース → `target` より新しい構文をダウンレベル変換」。
TypeScript なら**型は検査せず、消すだけ**（だから速い。型チェックは別途 `tsc --noEmit`）。
「loader」という語と考え方は webpack と共通で、拡張子 → 扱い方の対応表という点も同じ。

### ④ Optimize

| 処理 | 何を見て何をするか | このリポジトリでの対象 |
|---|---|---|
| **tree shaking** | ESM の静的構造を解析し、どこからも参照されない export を落とす | `utils.js` の `unused()` |
| **minify**（`minify: !dev`） | 空白除去・識別子短縮・不要コード除去 | 出力全体 |
| **code splitting**（`splitting`） | 動的 import の境界で別 chunk に切り出す。`format: 'esm'` のときだけ有効 | `heavy.js` |

### ⑤ Emit

- entry から静的に辿れた JS を 1 ファイルに畳んで `dist/main.js`
- CSS を集約して `dist/main.css`
- `heavy.js` を `dist/heavy-<hash>.js` へ
  — **splitting で切り出した chunk には自動でハッシュが付く。entry には付かない**
  （`entryNames: '[name]-[hash]'` を自分で書かない限り）
- `metafile: true` → 「どの入力が何 byte、どの出力に入ったか」の JSON。
  `analyzeMetafile()` で読むと、`node_modules/nanoid/...` が `dist/main.js` の**中に**
  取り込まれているのが数字で見える ＝ **これがバンドルの実体**。
  「バンドルが大きい」と言われたときに、どのモジュールが太っているか特定するのがこの機能
  （webpack なら `webpack-bundle-analyzer`、Vite なら `rollup-plugin-visualizer` が同じ役割）

---

## transpile と bundle の境界（`bundle` フラグ）

```js
bundle: true    // ①②を回してグラフを作り、依存を束ねる → 出力から import 文が消える
bundle: false   // ③だけ。各ファイルを構文変換して出すだけ。import 文はそのまま残る
```

`bundle: false` でビルドすると `import { nanoid } from "nanoid"` が出力に残り、
ブラウザで `Failed to resolve module specifier`（＝ [00 章](./00-no-bundler.md) の詰まり）。

- **transpile** = 工程③だけ。1 ファイルの構文変換。**ファイル数は変わらない**
- **bundle** = 工程①②を回す。依存を辿って束ねる。**ファイル数が減る**

---

## なぜ速いのか（原理）

- **Go 製・ネイティブコンパイル**。JS 製ツールのような VM のウォームアップがない
- **AST をツール間で共有しない**。JS 製のパイプラインは
  「Babel でパース → 別プラグインが同じ木をまた歩く → minifier がまた歩く」を繰り返す。
  esbuild は 1 プロセス内で 1 パスに寄せている
- 型を持たない（TS の型検査をしない）
- 処理を CPU コア数ぶん並列化

---

## esbuild が「やらないこと」＝ 単体でアプリのビルドに使えない理由

- **HTML を触らない**。[01-esbuild/index.html](../01-esbuild/index.html) は
  `./dist/main.js` / `./dist/main.css` を**手書き**している。
  ハッシュ付きファイル名にした瞬間、HTML のパス書き換えを自前でやる羽目になる
  （プラグイン自作 or 別ツール）
- **HMR がない**。`dev` は watch + 静的サーバーだけ。保存したら手でリロード
- CSS Modules など高度な CSS 処理が弱い
- プラグイン API が Rollup ほど成熟していない

→ **アプリのビルド本体には使わず、他ツールの内部エンジン（Vite の依存事前バンドル等）や、
CLI / ライブラリ / Lambda 関数のバンドルに使う**、が現在の定番。
この「HTML 処理 + dev サーバー + HMR + 設定済みの諸々」を足したパックが [02 の Vite](./02-vite.md)。

---

## 押さえどころ

- バンドラ = Resolve → Load → Transform → Optimize → Emit の 5 工程。esbuild でその骨格が丸見え
- `bundle: false / true` が transpile と bundle の境界そのもの
- 速さの理由はアルゴリズムではなく実装（ネイティブ・1 パス・並列）
- esbuild 単体はアプリのビルドツールとしては機能不足。部品として使う
