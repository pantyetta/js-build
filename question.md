# 質問と回答

勉強会で出た質問への回答。用語の詳細は [docs/README.md](docs/README.md)、
各ツールの仕組みは [docs/](docs/README.md) の 00〜03 も参照。
前提になっている JS の常識と歴史は [docs/js-background.md](docs/js-background.md) にまとめた。

---

## ES module とは？ / ESM とは？

**「ES module」「ES Modules」「ESM」は全部同じもの。**
ESM = **E**CMA**S**cript **M**odules の略。ECMAScript は JavaScript の言語仕様の
正式名称（ECMA International が策定しているため）。

### 何者か

2015 年の ES2015（ES6）で**言語仕様に入ったモジュールシステム**。
それ以前は言語自体にモジュールの仕組みが無く、CommonJS（Node.js）や AMD（RequireJS）
といった後付けの流儀が使われていた（→ [docs/README.md](docs/README.md) 1 章の歴史）。

```js
// エクスポート側（lib.js）
export const foo = 1;
export function bar() {}
export default class Baz {}

// インポート側
import Baz, { foo, bar } from './lib.js';
import * as lib from './lib.js';

// 動的 import：実行時に評価される式。これだけは if やイベントハンドラの中に書ける
const mod = await import('./heavy.js');
```

### CommonJS との違い

| | ESM | CommonJS |
|---|---|---|
| 構文 | `import` / `export` | `require()` / `module.exports` |
| 解決タイミング | **静的**（パース時に import が確定する） | 動的（実行中に `require` を呼ぶ） |
| トップレベル `await` | 使える | 使えない |
| tree shaking | できる（静的なので解析可能） | 基本できない |
| Node での指定 | `.mjs` ／ `package.json` の `"type": "module"` | `.cjs` ／ 既定の `.js` |

**「静的」が肝**。`import` はファイル先頭で宣言され、`if` の中には書けない。
だからバンドラは**コードを実行せずに**依存グラフを解析でき、未使用の export を落とせる
（tree shaking → [docs/01-esbuild.md](docs/01-esbuild.md)）。

### どこで動くか

- **ブラウザ**：`<script type="module" src="./main.js">`。`type="module"` を付けると
  ESM 扱いになる（`import` が使える／遅延実行／strict mode／スコープ分離）。
  このリポジトリの `00-no-bundler/` がこれだけで動かしている例
- **Node.js**：v12〜（2019〜2020）で安定。`package.json` に `"type": "module"` か `.mjs`。
  このリポジトリの各 `package.json` にも `"type": "module"` があり、
  `01-esbuild/build.mjs` や設定ファイルが ESM 構文なのはそのため

---

## bare specifier とは？

`import ... from` の後ろの文字列を **module specifier（モジュール指定子）** と呼ぶ。3 種類ある：

```js
import x from './utils.js';      // 相対指定子    relative
import x from '/src/utils.js';   // 絶対指定子    absolute
import x from 'nanoid';          // ★ bare specifier（bare = 裸の）
import x from 'lodash/debounce'; // これも bare（パッケージ名 + サブパス）
```

**bare specifier = `/` `./` `../` で始まらず、URL でもない指定子** ＝ 実質パッケージ名。

### なぜ困るか

ブラウザには「`nanoid` という名前をどのファイルに対応させるか」のルールが無い。

```
Uncaught TypeError: Failed to resolve module specifier "nanoid".
Relative references must start with either "/", "./", or "../".
```

相対・絶対指定子はそのまま URL として取りに行けるが、bare specifier は解決先が不明。

### 誰が解決するか

| 環境 | やり方 |
|---|---|
| **Node.js** | `node_modules` を上へ辿り、`package.json` の `exports` / `main` を見て実ファイルを決める |
| **バンドラ**（esbuild / webpack / Vite） | 上記 Node 相当の解決を内蔵し、ビルド時に実パスへ置換 |
| **Vite dev サーバー** | 事前バンドルして `import 'nanoid'` → `import '/node_modules/.vite/deps/nanoid.js?v=xxxx'` に書き換え |
| **ブラウザ単体** | `<script type="importmap">` で手動の対応表を書けば可。ただし `node_modules` の探索まではしてくれない |

### このリポジトリでの現れ方

- `00-no-bundler/main.js` は `import { nanoid } from 'nanoid'` を**あえて書いていない**（書くと上のエラー）
- `01` / `02` / `03` の `src/main.js` には有り。各ツールが解決している
- Vite dev の Network タブで書き換えを実物確認できる（→ [docs/02-vite.md](docs/02-vite.md)）

---

## 難読化とかしてないっけ？

**していない。** やっているのは **minify（最小化）** で、これは難読化とは別物。

| | minify（やっている） | 難読化 obfuscation（やっていない） |
|---|---|---|
| 目的 | ファイルサイズを縮める | 読解・リバースエンジニアリングを妨害する |
| 手法 | 空白/改行削除、ローカル変数名を短縮（`count`→`a`）、デッドコード削除、短い等価式へ書き換え | 制御フロー平坦化、文字列の配列化 + デコーダ、ダミーコード挿入、`eval` 多用 |
| 元の構造 | 変数名以外は残る。整形すれば読める | 意図的に破壊する。整形しても読めない |
| source map | 貼れば元コードに戻して読める | 通常は付けない |

### このリポジトリの minify の出どころ

| ツール | minify | OFF にするには |
|---|---|---|
| esbuild | `build.mjs` の `minify: !dev` | `npm run dev`（`--dev`）で OFF |
| Vite | 既定で ON（本番ビルド時） | `vite.config.js` に `build.minify: false` |
| webpack | `mode: 'production'` で自動 ON（terser） | `npm run build:dev`（development）で OFF |

3 ツールとも source map を出しているので（`sourcemap: true` / `devtool`）、
minify 後でも DevTools で元のコードにマッピングして読める。
minify なしの人間可読な出力を見たいなら esbuild は `npm run dev`、webpack は `npm run build:dev`。

---

## Vite 7 での挙動も見たい

→ **[`02b-vite7/`](02b-vite7/README.md) を用意しました。** スライド版は
[`SLIDES-vite7to8.html`](SLIDES-vite7to8.html)（約70 分・前半=Vite 7→8 の影響、後半=JS ビルドの深掘り）。
`02-vite`（Vite 8）とソース完全同一で、
`vite` のバージョンだけ 7 系に固定。dev ポートは 5273 なので `02-vite`（5173）と**同時起動**して
見比べられます。

```sh
# それぞれ別ターミナルで（どちらもリポジトリのルートから）
cd 02b-vite7 && npm install && npm run dev     # → http://localhost:5273/
cd 02-vite   && npm install && npm run dev     # → http://localhost:5173/
```

Vite 7 と 8 の違いは**本番ビルドのエンジンだけ**。dev サーバーの仕組み（事前バンドル +
on-demand 変換 + HMR）は 7 も 8 も同じで、内部エンジンが esbuild → Rolldown に変わっただけ。
「dev は esbuild / 本番は Rollup」という定番の説明は **Vite 7 までの話**
（Vite 8 側の確認は [docs/README.md](docs/README.md) 5 章）。

### 分かったこと（両方インストールして実際にビルドした結果）

**dev は 7 も 8 も同じ。** `/src/main.js` のレスポンスはどちらも次の形（`?v=` のハッシュだけ違う）：

```js
import { nanoid } from "/node_modules/.vite/deps/nanoid.js?v=xxxxxxxx";  // bare → 実パス
import { setupCounter } from "/src/counter.js";                          // 相対はそのまま
```

**build はバンドラが別物。**

| | Vite 7（02b-vite7） | Vite 8（02-vite） |
|---|---|---|
| vite | 7.3.6 | 8.2.2 |
| `vite` の dependencies | `esbuild`, `rollup`, fdir, picomatch, postcss, tinyglobby | `rolldown`, `lightningcss`, picomatch, postcss, tinyglobby |
| `npm ls` の主役 | `esbuild@0.28.2` / `rollup@4.63.1` | `rolldown@1.2.7` / `lightningcss@1.33.0` |
| インストール総数 / `node_modules` | 16 / 21 MB | 17 / 33 MB |
| modules transformed | 10 | 11 |
| entry JS / CSS / heavy | 2,744 B / 320 B / 188 B | 2,776 B / 464 B / 185 B |
| JS minifier | esbuild — 文字列は `"..."`、`const` を保持 | Rolldown/Oxc — 文字列を全部 `` `...` `` に変換 |
| CSS minifier | esbuild — ソースのプロパティ順を保つ | lightningcss — 並べ替え、`color-scheme:light dark` を `--lightningcss-*` 変数に展開 |

出力サイズはほぼ互角。**中身（バイト列）は全ファイル違う**（minifier が別だから）。
`index.html` の差はハッシュ付きファイル名の 2 行だけ。詳細は [`02b-vite7/README.md`](02b-vite7/README.md)。
