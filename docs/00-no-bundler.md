# 00 — バンドラなし：ブラウザ単体で何が起きているか

関連: [docs トップ](./README.md) ／ 実験ノート [00-no-bundler/README.md](../00-no-bundler/README.md) ／ 次章 → [01-esbuild.md](./01-esbuild.md)

---

## この章の主張

同じアプリを **ビルドせず、ブラウザのネイティブ ES Modules だけ**で動かそうとすると、
決まった場所で行き詰まる。**その行き詰まりポイントの一覧が、そのままビルドツールの
仕事の一覧**になっている。だから出発点はここ。

このフォルダの [main.js](../00-no-bundler/main.js) だけ、`import './style.css'` と
`import { nanoid } from 'nanoid'` を**書いていない**。書くと動かないからで、
01 以降との差分はまさにそこ。

---

## 仕組み：ブラウザが `<script type="module">` を読むとき

```
<script type="module" src="./main.js">
      │
      ▼  ① main.js を GET
   パースして import 文を "実行前に" 全部抜き出す（静的解析）
      │
      ├─ import './counter.js'  → URL として解決 → ② counter.js を GET
      ├─ import './utils.js'    → 同上          → ③ utils.js を GET
      │
      ▼  取得した各モジュールも同じように import を辿る
   依存グラフが完成 → 葉のモジュールから順に評価（実行）
      │
      ▼  import('./heavy.js') は "実行時に評価される式"
   ボタンが押されて初めて ④ heavy.js を GET
```

ブラウザが**できる**のはここまで。「URL を取ってきて、パースして、import を辿って、
順番に実行する」。モジュールグラフを組んで解決する機能自体は、最初からブラウザにある。

---

## ブラウザが「できない」4つ ＝ ビルドツールの存在理由

[docs トップ](./README.md) 1 章と同じ 4 つを、動く / 動かないコード付きで。

### 1. bare specifier を解決できない

```js
import { nanoid } from 'nanoid';
// Uncaught TypeError: Failed to resolve module specifier "nanoid".
// Relative references must start with either "/", "./", or "../".
```

仕様上、ブラウザが解決するのは `/` `./` `../` か絶対 URL で始まる指定子だけ。
`'nanoid'` のようなパッケージ名（bare specifier）は**エラー扱い**。
import maps を書けば「名前 → URL」の対応表は作れるが、
**`node_modules` の中から実体（`nanoid/index.browser.js` など）を探し当てる仕事**は
誰もやってくれない。

（関連：ブラウザは**拡張子も補完しない**。Node は `./counter` から `./counter.js` を
試すが、ブラウザは URL をそのまま取りに行くだけ。`import './counter.js'` と
拡張子まで書かないと 404 になる）

### 2. リクエストが爆発する

グラフのノード数だけ HTTP の往復が要る。しかも `main → counter → utils` と
ネストが深いほど「レスポンスを待つ → パース → 次の import を発見 → GET」が直列化する
（ウォーターフォール）。5 個なら問題ない。実務規模の数百〜数千個で破綻する。
HTTP/2 の多重化でも往復回数はゼロにはならない。

### 3. JS 以外を import できない

```js
import './style.css';   // CSS を JS モジュールとして評価しようとして失敗
```

CSS も画像も TypeScript も JSX も Vue SFC も、ブラウザにとっては「パースできない JS」。
だからこの 00 では CSS を [index.html](../00-no-bundler/index.html) の
`<link rel="stylesheet">` で読んでいる。

### 4. 最適化がゼロ

書いたものがそのまま配られる。minify なし、どこからも使われない `utils.js` の
`unused()` もそのまま残る、古いブラウザ向けの構文変換もなし。

---

## 動的 import はブラウザネイティブ機能

`import('./heavy.js')` は仕様の一部。**ボタンのクリックで式が評価された瞬間**に
`heavy.js` の GET が飛ぶ。DevTools の Network タブで遅れて現れるのがそれ。

バンドラの **code splitting は「この分割点をビルド時に見つけて、あらかじめ別ファイルに
切り出しておく」だけ**。分割の"起点"は元々ブラウザ側にある、と分かると 01 以降が読みやすい。

---

## 確認方法

```sh
npx serve .        # or: python3 -m http.server 8000
```

DevTools の Network タブを開いてリロード：

- `main.js` → `counter.js` → `utils.js` が 1 本ずつ順に落ちてくる
- 「動的 import する」ボタンで `heavy.js` が遅れて出現する

`file://` で直接開くと CORS で ESM が読めない。必ず HTTP サーバー経由で開くこと。

---

## 押さえどころ

- ブラウザは「モジュールグラフを辿って実行」まではできる。
- できないのは **① bare specifier の解決 ② リクエスト数の抑制 ③ JS 以外の取り込み
  ④ 最適化**（＋拡張子補完）。
- この 4 つを埋めるのがビルドツール。01 / 02 / 03 は「4 つをどう埋めるか」の違いでしかない。
