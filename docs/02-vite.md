# 02 — Vite：dev と build は別のコードを通る

関連: [docs トップ](./README.md) ／ 実験ノート [02-vite/README.md](../02-vite/README.md) ／ 前章 [01-esbuild.md](./01-esbuild.md) ・ 次章 [03-webpack.md](./03-webpack.md)

---

## この章の主張

Vite は 1 つのバンドラではなく、**「dev サーバー」と「本番ビルド」の 2 本立て**。
この 2 つが**別々のコードパス**であることが Vite の全て。

- **dev：バンドルしない**。ブラウザのネイティブ ESM をそのまま使う
- **build：バンドルする**（このリポジトリの Vite 8 では Rust 製の Rolldown が担当）

[vite.config.js](../02-vite/vite.config.js) は全項目がデフォルト値の明示で、消しても挙動は
変わらない。「設定を書かなくていい」を見せるためにあえて書いてある。

---

## 仕組み①：dev サーバー（`vite`）

### 起動時にやること ＝ 依存の事前バンドル（pre-bundling / optimizeDeps）だけ

```
起動
 │  プロジェクトを軽くスキャンして node_modules 由来の import を集める（ここでは nanoid）
 │   → esbuild で ESM の単一ファイルに変換 → node_modules/.vite/deps/ に置く
 │   → _metadata.json にハッシュを記録（lockfile と config が変わらなければ次回は再利用）
 ▼
 アプリのソース（src/）は 1 行も読まない  ← 起動が数百ms・プロジェクト規模に比例しない理由
```

### リクエストが来るたびに、その場で変換して返す（on-demand）

```
ブラウザ ── GET /src/main.js ──▶ Vite が import を書き換えて返す

   import { nanoid } from 'nanoid'
        ↓ 書き換え
   import { nanoid } from '/node_modules/.vite/deps/nanoid.js?v=xxxx'   ← bare specifier を実パスに

   import './style.css'
        ↓
   /src/style.css への import に。CSS リクエストには
   「その CSS 文字列を <style> に挿入する JS」を返す（dev では CSS も JS モジュールとして配る）

ブラウザのネイティブ ESM が、書き換え済みの import を辿って残りを個別に GET
   → 画面に必要なモジュールしか変換されない
```

`?v=xxxx`（依存）/ `?t=xxxx`（ソース）はキャッシュ用のクエリ。
変わっていないものには 304 を返せる。

### HMR：リロードではない

Vite はブラウザと WebSocket で繋がっている。ファイル保存 → 影響を受けるモジュールを特定
→ **そのモジュールだけ再変換** → WS で「これに差し替えて」と通知。

| 編集したもの | 起きること | 理由 |
|---|---|---|
| `style.css` | `<style>` の中身だけ差し替え。カウンターの count は保持される | CSS は状態を持たない |
| `counter.js` | **ページ全体リロード**。count は 0 に戻る | `import.meta.hot.accept()` が無く、HMR の境界が見つからない |
| （React / Vue プラグイン導入時） | コンポーネントの state を保ったまま差し替え | プラグインが `accept()` を実装している |

---

## 仕組み②：本番ビルド（`vite build`）

```
index.html をエントリとして解析（<script> <link> を見つける）
      │
      ▼  内蔵バンドラ（Vite 8 = Rolldown / Rust・Oxc ベース）で依存グラフを構築
   tree shaking / minify / code splitting   ※ CSS の変換・minify は lightningcss
      │
      ▼  Emit
   dist/assets/index-<hash>.js     本体
   dist/assets/heavy-<hash>.js     動的 import の chunk
   dist/assets/index-<hash>.css    集約した CSS
   dist/index.html                 ↓ 書き換えて出力
```

出力される `index.html`：

```html
<!-- ソース -->
<script type="module" src="/src/main.js"></script>

<!-- ビルド後：ハッシュ付きファイル名に差し替え ＋ CSS の <link> を自動挿入 -->
<script type="module" crossorigin src="/assets/index-Bx43ohxV.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-BBFHx35T.css">
```

- **ハッシュ付きファイル名** → 中身が変わった時だけ名前が変わる ＝ 長期キャッシュが効く
- `main.js` の `import './style.css'` が「CSS ファイルの出力 ＋ HTML への `<link>` 注入」に
  変換された — **[01-esbuild](./01-esbuild.md) で手書きしていた部分の自動化**
- `assetsInlineLimit`（4096 B）未満のアセットは base64 で JS に埋め込まれる

`vite preview` は `dist/` を静的配信するだけの確認用サーバー。

---

## なぜこの二段構えなのか

| 疑問 | 答え |
|---|---|
| なぜ dev はバンドルしない？ | ブラウザの ESM 解決能力をそのままバンドラ代わりに使える。事前処理が無いので起動が規模に比例しない |
| なぜ node_modules だけは事前バンドル？ | ① bare specifier の書き換え先の実体が要る ② lodash 等は内部が数百モジュール、そのまま配ると数百リクエストになる |
| なぜ本番はバンドルする？ | 非バンドル配信が速いのは localhost だから。実回線で数百リクエストは遅い |

**代償**：dev と build で別パスを通る ＝「dev では動いたのに本番で壊れる」があり得る。
Vite の既知のトレードオフ。だからリリース前に `vite preview` で本番相当を確認する。

---

## 【注意】この Vite は Rollup も esbuild も使っていない

検索で出てくる「Vite は dev で esbuild、本番で Rollup」は**古い**。手元で確認できる：

```sh
npm ls rolldown
# └─┬ vite@8.2.2
#   └── rolldown@1.2.7

node -e "console.log(require('./node_modules/vite/package.json').dependencies)"
# { lightningcss, picomatch, postcss, rolldown, tinyglobby }   ← rollup も esbuild も居ない
```

Vite 8 のバンドルは **Rolldown**（Rust・Oxc ベース）、CSS は **lightningcss**。
この分野は動きが速いので、記事の日付を見る / 手元で `npm ls` する。

[`02b-vite7/`](../02b-vite7/README.md) に Vite 7 で固定した同じアプリがある。
7（Rollup + esbuild）と 8（Rolldown）を両方ビルドして、依存・出力・minifier の癖を見比べられる
（dev の挙動は 7 も 8 も同じ、というのもそこで確認できる）。

---

## 押さえどころ

- Vite ≠ バンドラ。**dev サーバー ＋ 設定済みの本番バンドラ**のパック
- dev の中核仕事は「bare specifier の実パスへの書き換え」と「on-demand 変換」
- 事前バンドルの成果物は `node_modules/.vite/`。壊れたら `rm -rf node_modules/.vite` で直る
- webpack と比べるなら、「webpack ＋ webpack-dev-server ＋ loader 各種 ＋ plugin」のセット ↔ Vite
