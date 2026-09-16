# js-build

JS のビルドツール（esbuild / Vite / webpack）を、仕組みから理解するための教材。
「なんとなく使っている」を「仕組みが分かっている」に変える。

読み物（[`docs/`](./docs/README.md)）と、**同じアプリを 3 通りでビルドして出力を比べる
サンプル**（`00`〜`03`）で出来ています。

## 構成

| パス | 中身 |
|---|---|
| [`docs/`](./docs/README.md) | 読み物。全体像（5 工程・用語・webpack と Vite の違い）＋ ツール別の仕組み解説 |
| [`docs/js-background.md`](./docs/js-background.md) | 前提知識。この教材が知っている前提にしている JS の常識と歴史 |
| [`00-no-bundler/`](./00-no-bundler/) | バンドラなし。素のブラウザの限界を体感する |
| [`01-esbuild/`](./01-esbuild/) | バンドラの原理を、一番薄いレイヤーで見る |
| [`02-vite/`](./02-vite/) | dev と build でアーキテクチャが違う理由 |
| [`02b-vite7/`](./02b-vite7/) | Vite 7（Rollup + esbuild）と 8（Rolldown）の出力を見比べる |
| [`03-webpack/`](./03-webpack/) | `__webpack_require__` の正体と、loader / plugin |
| [`04-bench/`](./04-bench/) | Vite 7 → 8 のビルド**時間**を実測する（約 6,900 モジュールの巨大プロジェクトで、コード分割ありは ~20 倍、なしは ~48 倍差） |
| [`SLIDES.html`](./SLIDES.html) | 勉強会用スライド（70 分）。パート1で前提知識（[js-background.md](./docs/js-background.md)）を扱う。`SLIDES-standalone.html` は単体版 |
| [`SLIDES-vite7to8.html`](./SLIDES-vite7to8.html) | 勉強会スライド（約70 分）。前半で Vite 7 → 8 の変更と実務影響、後半で JS のビルドを歴史から深掘り。`SLIDES-vite7to8-standalone.html` は単体版 |

`00`〜`03` は**ソースが全部同じ**（カウンター + nanoid + CSS import + 動的 import）。
違うのは設定と出力だけです。各フォルダの README に「どのコマンドを叩き、DevTools の
どこを見て、何を壊すか」が書いてあります。

## はじめかた

```sh
# 0. 素のブラウザの限界を知る（インストール不要）
cd 00-no-bundler && npx serve .

# 1〜3. 初回だけ npm install（node_modules は git 管理外）
cd 01-esbuild  && npm install && npm run build   # dist/ を覗く
cd 02-vite     && npm install && npm run dev     # Network タブを開いたまま起動
cd 03-webpack  && npm install && npm run build
```

## 読む順番

0. [`docs/js-background.md`](./docs/js-background.md) — 前提知識に不安があればここから（ESM・npm・歴史）
1. [`docs/README.md`](./docs/README.md) — 全体像（地図）
2. `docs/0X-*.md` — そのツールが内部で何をしているか（仕組み）
3. `0X-*/README.md` — 手を動かす実験ノート（実地）

`00` → `01` → `02` → `03` の順。前の章の内容を次の章が使います。
