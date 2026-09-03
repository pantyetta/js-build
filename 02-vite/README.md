# 02 — Vite：dev と build で別の仕組みが動いている

**Vite を理解する = 「dev はバンドルしない / build はバンドルする」を理解する**、これだけです。

```sh
npm run dev       # 開発サーバー → http://localhost:5173/
npm run build     # 本番ビルド → dist/
npm run preview   # dist/ を配信して本番相当を確認
```

`vite.config.js` は**中身が全部デフォルト値の明示**です。消しても挙動は変わりません。
「設定を書かなくていい」のが Vite の売りなので、それを見せるためにあえて書いてあります。

---

## パート1：dev サーバーで何が起きているか

`npm run dev` して、**DevTools の Network タブを開いたままリロード**してください。

### 見てほしいこと① バンドルされていない

`main.js` / `counter.js` / `utils.js` / `style.css` が **別々のリクエスト**で落ちてきます。
`00-no-bundler` と同じ光景です。Vite は開発中、**ブラウザのネイティブ ESM をそのまま使っている**。

だから起動が速い。プロジェクトが 10 倍になっても起動時間はほぼ変わりません
（webpack は起動時に全部バンドルするので線形に遅くなる）。

### 見てほしいこと② import が書き換えられている

Network タブで `main.js` を選んで **Response** を見てください。ソースにはこう書いたのに:

```js
import { nanoid } from 'nanoid';
```

返ってきているのはこうなっています:

```js
import { nanoid } from '/node_modules/.vite/deps/nanoid.js?v=xxxxxxxx';
```

**bare specifier が実パスに書き換わっている。** これが Vite dev の中核の仕事です。
ブラウザは `'nanoid'` を解決できないので、誰かがやらないといけない（root README 1章③）。

### 見てほしいこと③ 事前バンドルの実物

書き換え先のファイルは実在します:

```sh
ls node_modules/.vite/deps/
# _metadata.json  nanoid.js  nanoid.js.map  package.json
```

`node_modules` の中身だけは**起動時に一度バンドルして**ここに置いてある。理由は 2 つ:

1. 上記のパス書き換え先が必要だから
2. lodash のようなパッケージは内部が数百モジュール。そのまま配ると数百リクエストになるから

**依存はめったに変わらないのでキャッシュが効く**（`_metadata.json` にハッシュが入っている）。
だから 2 回目以降の起動はさらに速い。壊れたときは `rm -rf node_modules/.vite` で直ります。
これは Vite のトラブルシューティングの定番なので覚えておくと便利です。

### 見てほしいこと④ HMR は「リロードではない」

ブラウザでカウンターを何回か押して、**count を 5 くらいにしておく**。
その状態で `src/style.css` の `button` の `padding` を変えて保存してください。

**スタイルだけ変わって、count は 5 のまま**です。ページはリロードされていない。
これが HMR（Hot Module Replacement）。CSS は状態を持たないので、Vite は
`<style>` の中身を差し替えるだけで済ませています。

比較として `src/counter.js` を編集して保存すると、今度は**ページ全体がリロード**され
count が 0 に戻ります（HMR の受け入れ処理を書いていないため）。
React や Vue のプラグインを入れると、コンポーネントの state を保ったまま
差し替えられるようになる — あれは各フレームワークのプラグインが
`import.meta.hot.accept()` を実装しているからです。

---

## パート2：本番ビルドで何が起きているか

```sh
npm run build
```

```
dist/index.html                 0.77 kB
dist/assets/index-BBFHx35T.css  0.46 kB
dist/assets/heavy-CuXC7Vo8.js   0.18 kB
dist/assets/index-Bx43ohxV.js   2.77 kB
```

### 見てほしいこと⑤ HTML が書き換えられている

```sh
cat dist/index.html
```

ソースの `<script type="module" src="/src/main.js">` が、こうなっています:

```html
<script type="module" crossorigin src="/assets/index-Bx43ohxV.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-BBFHx35T.css">
```

- **ハッシュ付きファイル名に差し替え済み** → 中身が変わった時だけ名前が変わる＝長期キャッシュが効く
- **`<link>` が自動で追加されている** → `main.js` の `import './style.css'` が
  「CSS ファイルの出力 + HTML への注入」に変換された

`01-esbuild` で手書きしていた部分が、全部自動になっているのが Vite の価値です。

### 見てほしいこと⑥ dev と build は別のコードを通る

dev では**バンドルしない**、build では**バンドルする**。
つまり **dev で動いたコードが本番で壊れることがあり得ます**。これは Vite の既知のトレードオフ。

だから `npm run preview` があります。`dist/` を実際に配信して本番相当を確認するコマンドで、
リリース前には必ず通してください。

---

## 【重要】この Vite は Rollup を使っていません

検索して出てくる記事の大半に「Vite は dev で esbuild、本番で Rollup を使う」と書いてあります。
**手元で確認してください:**

```sh
npm ls rolldown
# example-vite@
# └─┬ vite@8.2.2
#   └── rolldown@1.2.7
```

```sh
node -e "console.log(require('./node_modules/vite/package.json').dependencies)"
# { lightningcss, picomatch, postcss, rolldown, tinyglobby }
```

**Rollup も esbuild も依存に居ません。** Vite 8 のバンドルは Rust 製の
**Rolldown**（Oxc ベース）が担当しています。CSS は `lightningcss`。

この分野は動きが速いので、**記事の日付を見る / 手元で `npm ls` する**のが一番確実です。
今日の正解が来年の正解とは限りません。

## 壊して学ぶ

### 実験A: vendor chunk を作る

`vite.config.js` の `manualChunks` のコメントを外して `npm run build`。

```js
manualChunks: { vendor: ['nanoid'] },
```

`dist/assets/vendor-*.js` が増えます。実務では
「めったに変わらないライブラリ群を別 chunk にしてキャッシュを効かせる」ためによく使う手です。

### 実験B: dev サーバーのキャッシュを壊す

```sh
rm -rf node_modules/.vite && npm run dev
```

起動時に `Optimizing dependencies: nanoid` と出て、`.vite/deps` が作り直されます。
「依存を入れ替えたのに反映されない」時の定番の対処がこれ。

→ 次は `../03-webpack`
