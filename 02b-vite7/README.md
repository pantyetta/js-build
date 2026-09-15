# 02b — Vite 7：Vite 8（`02-vite`）と挙動を見比べる

[`02-vite`](../02-vite/README.md) と**ソースは完全に同じ**（`src/` と `index.html` をコピーしただけ）。
違うのは `package.json` の `vite` のバージョンだけ：

| | [`02-vite`](../02-vite/) | `02b-vite7`（ここ） |
|---|---|---|
| vite | `^8.2.2` → 8.2.2 | `^7.0.0` → 7.3.6 |
| dev ポート | 5173 | **5273**（同時に起動して見比べられる） |

仕組みの解説は [docs/02-vite.md](../docs/02-vite.md)。この README は **7 と 8 で何が変わるか**だけ。
勉強会向けスライドは [`../SLIDES-vite7to8.html`](../SLIDES-vite7to8.html)（約70 分）。

```sh
npm install
npm run dev       # → http://localhost:5273/
npm run build     # → dist/
npm run preview
```

---

## 結論：dev は同じ、build の中身が違う

| | Vite 7 | Vite 8 |
|---|---|---|
| dev サーバー（事前バンドル + import 書き換え + HMR） | **同じ** | **同じ** |
| 本番バンドラ | **Rollup**（JS 製） | **Rolldown**（Rust・Oxc ベース） |
| 依存の事前バンドル / JS 変換 | **esbuild** | Rolldown 側（Oxc）に統合 |
| CSS の変換・minify | **esbuild** | **lightningcss** |

「dev は esbuild、本番は Rollup」という定番の説明は **Vite 7 までの話**。

### esbuild はどこへ行ったのか

Vite 7 は **Rollup ＋ esbuild の 2 ツール**体制だった。Rollup は束ねるのは得意だが
JS の変換・minify が遅いので、そこを esbuild に外注していた。Vite 8 では esbuild の仕事が
すべて **Oxc**（Rolldown が土台にしている Rust 製ツールチェーン）へ移った：

| esbuild がやっていた仕事（Vite 7） | Vite 8 での担当 |
|---|---|
| 依存の事前バンドル（dev / `optimizeDeps`） | Rolldown |
| TS・JSX → JS の変換（dev も build も） | Oxc |
| 構文のダウンレベル（`build.target`） | Oxc |
| JS の minify（Vite の既定 minifier） | Oxc の minifier |

つまり **「Rollup → Rolldown」と「esbuild → Oxc」は別々の乗り換えではなく 1 つの統合**。
`vite@8` の依存からは `rollup` も `esbuild` も両方消えて `rolldown` だけになる（`npm ls` で確認できる）。
Rolldown ＝ Rollup の役 ＋ esbuild の役 を Rust の 1 ツールに畳んだもの、というのが設計目標そのもの。

---

## パート1：dev は 7 も 8 も変わらない

両方 `npm run dev` して、`/src/main.js` のレスポンスを比べると——

```js
// Vite 7 (:5273) も Vite 8 (:5173) も、返ってくるのはこれ（?v= のハッシュだけ違う）
import "/src/style.css";
import { nanoid } from "/node_modules/.vite/deps/nanoid.js?v=xxxxxxxx";
import { setupCounter } from "/src/counter.js";
import { used } from "/src/utils.js";
```

- **bare specifier `'nanoid'` → 実パスへの書き換え**：どちらも同じ
- `node_modules/.vite/deps/` に `nanoid.js` を事前バンドル：どちらも同じ
- 相対 import (`./counter.js`) はそのまま：どちらも同じ

dev の体験（起動の速さ、HMR、Network タブの見え方）に 7 / 8 の差はありません。
事前バンドルを回すエンジンが内部で esbuild → Rolldown に変わっただけ。

---

## パート2：build はバンドラが別物

`npm run build` を両方で実行した実測（このリポジトリで取得）:

| | Vite 7（02b-vite7） | Vite 8（02-vite） |
|---|---|---|
| `vite` の dependencies | `esbuild`, `rollup`, fdir, picomatch, postcss, tinyglobby | `rolldown`, `lightningcss`, picomatch, postcss, tinyglobby |
| `npm ls` の主役 | `esbuild@0.28.2` / `rollup@4.63.1` | `rolldown@1.2.7` / `lightningcss@1.33.0` |
| インストール総数 | 16 | 17 |
| `node_modules` サイズ | 21 MB | 33 MB |
| ビルド時間 | ~180 ms | ~200 ms |
| modules transformed | 10 | 11 |
| entry JS | `index-*.js` 2,744 B | `index-*.js` 2,776 B |
| CSS | `index-*.css` **320 B** | `index-*.css` **464 B** |
| heavy chunk | `heavy-*.js` 188 B | `heavy-*.js` 185 B |
| `index.html` | 829 B | 829 B |

サイズはほぼ互角。**出力ファイルの中身（バイト列）は全部違う**（別の minifier だから）。
`index.html` の差はハッシュ付きファイル名の 2 行だけ。

**ビルド時間は Vite 8 のほうが遅く見える** — が、これはこのサンプルが 10 モジュールしかなく
プロセス起動のオーバーヘッドが支配的なため。Rolldown の並列バンドルは規模が乗って初めて効く。
実際に数千モジュール規模で測ると結果は逆転する: [`../04-bench/`](../04-bench/README.md) 参照
（同じ結論が規模でひっくり返る、という話自体が Vite 7→8 の実務上のポイント）。

### 見どころ①：JS minifier の癖

```js
// Vite 7 = esbuild：文字列は "..." 中心、const を保持
const r=document.createElement("link").relList; ...
function r(){return"JS build tools"}

// Vite 8 = Rolldown / Oxc：文字列を全部 `...`（バッククォート）に、let を使う
let e=document.createElement(`link`).relList; ...
function r(){return`JS build tools`}
```

entry JS 内のバッククォートの数：**Vite 7 が 8 個**（本物のテンプレートリテラルだけ）、
**Vite 8 が 84 個**（全文字列リテラルを変換）。出力を見た瞬間にどちらの minifier か分かる。

### 見どころ②：CSS minifier の癖

同じ `src/style.css` から：

```css
/* Vite 7 = esbuild：ソースのプロパティ順を保ち、color-scheme はそのまま */
:root{color-scheme:light dark;font-family:system-ui,sans-serif}
#app{padding:2rem;max-width:40rem}

/* Vite 8 = lightningcss：プロパティを並べ替え、color-scheme:light dark を
   --lightningcss-light/dark 変数 + @media に展開する（その分 CSS が大きい） */
:root{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;font-family:system-ui,sans-serif}
@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}
#app{max-width:40rem;padding:2rem}
```

どちらも `rgba(127,127,127,.15)` → `#7f7f7f26`（hex8）には縮める。

---

## 壊して学ぶ

### 実験：手元で両方をビルドして diff する

```sh
cd ../02-vite   && npm install && npm run build && mv dist /tmp/dist-vite8
cd ../02b-vite7 && npm install && npm run build && mv dist /tmp/dist-vite7
diff -rq /tmp/dist-vite7 /tmp/dist-vite8      # 全ファイルが「片方にしか無い」= 中身が違う
diff <(cat /tmp/dist-vite7/index.html) <(cat /tmp/dist-vite8/index.html)   # 差はハッシュ2行だけ
```

### 実験：Vite 7 を最新の 7 系に上げる / 8 に上げてみる

```sh
npm i -D vite@7        # 7 系の最新
npm i -D vite@latest   # 8 系（= ../02-vite と同じになる）
git checkout package.json package-lock.json && npm install   # 元に戻す
```

`vite@latest` にすると `vite/package.json` の依存から `esbuild` と `rollup` が消え、
`rolldown` と `lightningcss` に入れ替わるのが `npm ls` で見えます。

---

## まとめ

- **Vite 7 → 8 で変わったのは本番ビルドのエンジン**（Rollup + esbuild → Rolldown）。dev は不変
- 設定ファイル（`vite.config.js`）はそのまま。`rollupOptions` という名前も 8 で残っている
- サイズ・速度の差はこの規模では誤差。**出力の中身を見ると minifier が違うのは一目瞭然**
- 「Vite は本番で Rollup」と書いてある記事は 7 までの話。→ [docs/README.md](../docs/README.md) 5 章

→ 次は [`../03-webpack`](../03-webpack/README.md)
