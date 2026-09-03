// esbuild は「設定ファイル」ではなく JS API で呼ぶのが基本スタイル。
// 何が起きているかが一番はっきり見えるので、まずここから読むのがおすすめ。
import * as esbuild from 'esbuild';

const dev = process.argv.includes('--dev');

/** @type {import('esbuild').BuildOptions} */
const options = {
  // ① Resolve の起点。ここから import を辿って依存グラフを作る
  entryPoints: ['src/main.js'],

  // ② これが false だと import 文を残したまま1ファイルずつ変換するだけ (= transpile only)。
  //    true にして初めて「依存を辿って1つに束ねる」= bundle になる
  bundle: true,

  outdir: 'dist',

  // ③ 出力するモジュール形式。'esm' | 'cjs' | 'iife'
  //    splitting: true は format: 'esm' のときだけ使える
  format: 'esm',

  // ④ 動的 import と共有モジュールを別 chunk に切り出す
  splitting: false,

  // ⑤ .css を見つけたら CSS として扱い、まとめて dist/main.css に吐く。
  //    「loader」という概念は webpack と同じ。拡張子 → 扱い方の対応表
  loader: {
    '.css': 'css',
    '.svg': 'dataurl',
    '.png': 'file',
  },

  // ⑥ どの構文まで残すか。ここより新しい構文はダウンレベル変換される
  target: ['es2020', 'chrome100', 'firefox100', 'safari15'],

  minify: !dev,
  sourcemap: true,
  metafile: true, // 何がどれだけ入ったかの解析用 JSON
};

if (dev) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { host, port } = await ctx.serve({ servedir: '.' });
  console.log(`\n  esbuild dev  →  http://${host}:${port}/\n`);
  console.log('  ※ HMR は無い。ファイルを保存したらブラウザを手でリロードする。');
} else {
  const result = await esbuild.build(options);

  // metafile を読むと「どの出力に何 byte 入ったか」が全部わかる
  console.log(await esbuild.analyzeMetafile(result.metafile));
}
