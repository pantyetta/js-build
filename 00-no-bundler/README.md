# 00 — バンドラなし（出発点）

```sh
npx serve .        # or: python3 -m http.server 8000
```

`file://` で直接開くと CORS で ES Modules が読めないので、必ず HTTP サーバー経由で開くこと。

## 見てほしいこと

DevTools の **Network タブ** を開いてリロードする。

- `main.js` → `counter.js` → `utils.js` … と **1ファイル1リクエスト**で順番に落ちてくる。
  ファイルが 5 個ならまだいい。実務の 1,000 モジュールでこれをやると死ぬ。これが
  「なぜバンドルするのか」の答えその1（HTTP/2 でもリクエスト数ゼロにはならない）。
- 「動的 import する」ボタンを押すと、**そのタイミングで** `heavy.js` が落ちてくる。
  これはブラウザネイティブの機能。バンドラの code splitting はこれをビルド時に再現している。

## 素のブラウザに出来ないこと（＝ビルドツールの存在理由）

`main.js` の冒頭コメントの通り:

1. `import { nanoid } from 'nanoid'` — **bare specifier を解決できない**。`node_modules` は
   ブラウザにとって単なる知らないディレクトリ。
2. `import './style.css'` — **CSS/画像/SVG を import できない**。
3. TypeScript / JSX / Vue SFC — **そのまま食べられない**。
4. 拡張子省略・minify・古いブラウザ向け変換 — **全部やってくれない**。

これらを埋めるのがビルドツール。次は `../01-esbuild` へ。
