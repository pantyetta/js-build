#!/usr/bin/env node
// 04-bench/generate.mjs
//
// Vite 7 (Rollup) と Vite 8 (Rolldown) のビルド時間を実測するための、
// 決定論的に巨大な「素の JS」プロジェクトを 1 箇所（app/）に生成する。
// vite7/ と vite8/ はここへの symlink 経由でこのソースを共有する。
//
// 同じ引数なら常にバイト一致の出力になる（PRNG のシード固定 + 呼び出し順固定）。
//
// Usage:
//   node generate.mjs                 # デフォルト規模で生成
//   node generate.mjs --modules 3000  # コンポーネント数を指定して生成（キャリブレーション用）

import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_DIR = path.join(__dirname, 'app');
const SRC_DIR = 'src'; // APP_DIR からの相対。write() はこれを起点にする

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const modulesArgIdx = args.indexOf('--modules');
// N=3750（leaf 3000 + component 3750 = 6876 モジュール）で
// Vite 7 のビルドが ~29〜31s になることを実測済み（README.md 参照）。
const N = modulesArgIdx !== -1 ? parseInt(args[modulesArgIdx + 1], 10) : 3750;

const PAGE_COUNT = 40;
const LEAVES_PER_GROUP = 50;
const CSS_FILE_COUNT = 20;
const COMMON_RATIO = 0.05; // 全ページ共通で読み込むコンポーネントの割合

// ---------------------------------------------------------------------------
// 決定論的 PRNG（mulberry32）。同じシード・同じ呼び出し順なら常に同じ値。
// ---------------------------------------------------------------------------
const SEED = 0xc0ffee;
function makePrng(seed) {
  let a = seed >>> 0;
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rng = makePrng(SEED);
const int = (min, max) => min + Math.floor(rng() * (max - min + 1));
const pickIndex = (len) => Math.floor(rng() * len);

// ---------------------------------------------------------------------------
// 出力ヘルパ：常に LF で書く（このリポジトリの CRLF 混在に generated tree を巻き込まない）
// ---------------------------------------------------------------------------
let fileCount = 0;
function write(relPath, content) {
  const full = path.join(APP_DIR, SRC_DIR, relPath);
  mkdirSync(path.dirname(full), { recursive: true });
  const normalized = content.replace(/\r\n/g, '\n');
  writeFileSync(full, normalized.endsWith('\n') ? normalized : normalized + '\n', 'utf8');
  fileCount += 1;
}

function pad(n, width = 5) {
  return String(n).padStart(width, '0');
}

// ---------------------------------------------------------------------------
// リセット
// ---------------------------------------------------------------------------
if (existsSync(APP_DIR)) rmSync(APP_DIR, { recursive: true, force: true });

// ---------------------------------------------------------------------------
// 1. lib/ 葉モジュール — import なしの純関数。AST の形を variant で散らす。
// ---------------------------------------------------------------------------
const leafCount = Math.round(N * 0.8);
const leafExports = []; // { uid, fnA, fnB, group }

function leafVariant(variantIdx, uid) {
  const A = int(2, 19);
  const B = int(1, 37);
  const C = int(1, 29);
  const M = int(3, 7);
  const fnA = 'calc' + uid + 'A';
  const fnB = 'calc' + uid + 'B';
  const constName = 'K' + uid;

  let body;
  switch (variantIdx % 6) {
    case 0:
      // function 宣言 + テンプレートリテラル（静的、補間なし）
      body =
        'export function ' + fnA + '(x) {\n' +
        '  const label = `leaf-block`;\n' +
        '  return label.length + x * ' + A + ' + ' + B + ';\n' +
        '}\n\n' +
        'export function ' + fnB + '(x) {\n' +
        '  return x * ' + C + ' - ' + A + ';\n' +
        '}\n';
      break;
    case 1:
      // arrow function + デフォルト引数
      body =
        'export const ' + fnA + ' = (x = ' + A + ') => x * ' + B + ' - ' + C + ';\n\n' +
        'export const ' + fnB + ' = (x = ' + C + ', y = ' + A + ') => (x + y) * ' + B + ';\n';
      break;
    case 2:
      // class（static method + getter）
      body =
        'class Helper' + uid + ' {\n' +
        '  static compute(x) {\n' +
        '    return x * ' + A + ' + ' + B + ';\n' +
        '  }\n' +
        '  get double() {\n' +
        '    return ' + A + ' * 2;\n' +
        '  }\n' +
        '}\n\n' +
        'export function ' + fnA + '(x) {\n' +
        '  return Helper' + uid + '.compute(x) + new Helper' + uid + '().double;\n' +
        '}\n\n' +
        'export function ' + fnB + '(x) {\n' +
        '  return Helper' + uid + '.compute(x) - ' + C + ';\n' +
        '}\n';
      break;
    case 3:
      // 分割代入パラメータ + 配列分割代入
      body =
        'export function ' + fnA + '({ x = ' + A + ', y = ' + B + ' } = {}) {\n' +
        '  const [p, q] = [x + y, x - y];\n' +
        '  return p * ' + C + ' + q;\n' +
        '}\n\n' +
        'export function ' + fnB + '(pair) {\n' +
        '  const [x = ' + A + ', y = ' + B + '] = pair || [];\n' +
        '  return x - y + ' + C + ';\n' +
        '}\n';
      break;
    case 4:
      // try/catch + switch
      body =
        'export function ' + fnA + '(x) {\n' +
        '  try {\n' +
        '    if (x < 0) throw new Error("neg");\n' +
        '    return x * ' + A + ' + ' + B + ';\n' +
        '  } catch (e) {\n' +
        '    return ' + C + ';\n' +
        '  }\n' +
        '}\n\n' +
        'export function ' + fnB + '(x) {\n' +
        '  switch (x % ' + M + ') {\n' +
        '    case 0: return x + ' + A + ';\n' +
        '    case 1: return x - ' + B + ';\n' +
        '    default: return x * ' + C + ';\n' +
        '  }\n' +
        '}\n';
      break;
    default:
      // async / regex + optional chaining + spread
      body =
        'const RE' + uid + ' = /^[a-z]+' + (uid.length % 9) + '$/;\n\n' +
        'export async function ' + fnA + '(x) {\n' +
        '  const y = await Promise.resolve(x * ' + A + ');\n' +
        '  return y + ' + B + ';\n' +
        '}\n\n' +
        'export function ' + fnB + '(x, opts) {\n' +
        '  const extra = opts?.extra ?? ' + A + ';\n' +
        '  const merged = [...[x, extra], ' + C + '];\n' +
        '  return RE' + uid + '.test("leaf") ? merged.length + x : merged.length - x;\n' +
        '}\n';
      break;
  }

  const header =
    '// 生成ファイル（04-bench/generate.mjs）。手で編集しない。\n' +
    '// variant ' + (variantIdx % 6) + ' — import なしの葉モジュール。\n\n';

  return {
    content: header + body + '\nexport const ' + constName + ' = ' + int(1, 999) + ';\n',
    fnA,
    fnB,
  };
}

const groupCount = Math.ceil(leafCount / LEAVES_PER_GROUP);
for (let g = 0; g < groupCount; g++) {
  const groupDir = 'lib/group' + pad(g, 3);
  const start = g * LEAVES_PER_GROUP;
  const end = Math.min(start + LEAVES_PER_GROUP, leafCount);
  const barrelLines = [
    '// 生成ファイル（04-bench/generate.mjs）。手で編集しない。',
    '// このグループの葉モジュールをまとめて re-export するバレル。',
    '',
  ];
  for (let i = start; i < end; i++) {
    const uid = 'u' + pad(i);
    const variantIdx = int(0, 5);
    const { content, fnA, fnB } = leafVariant(variantIdx, uid);
    const fileName = 'util' + pad(i) + '.js';
    write(groupDir + '/' + fileName, content);
    leafExports.push({ uid, fnA, fnB, group: g });
    barrelLines.push("export * from './" + fileName + "';");
  }
  write(groupDir + '/index.js', barrelLines.join('\n') + '\n');
}

// トップバレル：全グループを re-export（再エクスポート連鎖を作るのが狙い）
const topBarrelLines = [
  '// 生成ファイル（04-bench/generate.mjs）。手で編集しない。',
  '// 全グループバレルをまとめる、lib/ のエントリポイント。',
  '// components/ はここから import する（再エクスポート連鎖を意図的に作っている）。',
  '',
];
for (let g = 0; g < groupCount; g++) {
  topBarrelLines.push("export * from './group" + pad(g, 3) + "/index.js';");
}
write('lib/index.js', topBarrelLines.join('\n') + '\n');

// ---------------------------------------------------------------------------
// 2. styles/ — 意図的に少数（CSS は 7→8 の比較対象に入れない。esbuild vs lightningcss を
//    バンドラ本体の差に混ぜないため、ビルド時間の 2% 未満に抑える）
// ---------------------------------------------------------------------------
for (let i = 0; i < CSS_FILE_COUNT; i++) {
  const hue = int(0, 359);
  const lines = [
    '/* 生成ファイル（04-bench/generate.mjs）。手で編集しない。 */',
    '.blk-1 { color: hsl(' + hue + ' 70% 40%); padding: 0.25rem; }',
    '.blk-2 { color: hsl(' + ((hue + 90) % 360) + ' 70% 40%); margin: 0.25rem; }',
    '.blk-3 { border: 1px solid hsl(' + ((hue + 180) % 360) + ' 50% 50%); }',
    '.blk-4 { background: hsl(' + ((hue + 270) % 360) + ' 30% 92%); }',
    '',
  ];
  write('styles/s' + pad(i, 2) + '.css', lines.join('\n'));
}

// ---------------------------------------------------------------------------
// 3. components/ — lib のバレルから 3〜5 個 named import して呼び出し、
//    CSS を 1 つ import する。DOM に副作用を書き込む（tree-shaking で消えないように）。
// ---------------------------------------------------------------------------
const componentNames = []; // 'compNNNNN'
for (let i = 0; i < N; i++) {
  const name = 'comp' + pad(i);
  componentNames.push(name);

  const pickCount = int(3, 5);
  const picked = [];
  const usedIdx = new Set();
  while (picked.length < pickCount) {
    const idx = pickIndex(leafExports.length);
    if (usedIdx.has(idx)) continue;
    usedIdx.add(idx);
    const leaf = leafExports[idx];
    picked.push(rng() < 0.5 ? leaf.fnA : leaf.fnB);
  }

  const cssIdx = i % CSS_FILE_COUNT;
  const blkClass = 'blk-' + (1 + (i % 4));
  const variant = i % 3;

  const importLines = [
    "import { " + picked.join(', ') + " } from '../lib/index.js';",
    "import '../styles/s" + pad(cssIdx, 2) + ".css';",
    '',
  ];

  let body;
  const fnName = 'render' + name;
  if (variant === 0) {
    body =
      'export function ' + fnName + '(container) {\n' +
      '  const seed = ' + int(1, 50) + ';\n' +
      '  let total = seed;\n' +
      '  ' +
      picked.map((fn) => 'total = ' + fn + '(total);').join('\n  ') +
      '\n' +
      '  const el = document.createElement("div");\n' +
      '  el.className = "' + blkClass + '";\n' +
      '  el.textContent = `' + name + ': ${total}`;\n' +
      '  container.appendChild(el);\n' +
      '  return total;\n' +
      '}\n';
  } else if (variant === 1) {
    body =
      'export class ' + capitalize(name) + ' {\n' +
      '  constructor(seed = ' + int(1, 50) + ') {\n' +
      '    this.seed = seed;\n' +
      '  }\n' +
      '  compute() {\n' +
      '    let total = this.seed;\n' +
      '    ' +
      picked.map((fn) => 'total = ' + fn + '(total);').join('\n    ') +
      '\n' +
      '    return total;\n' +
      '  }\n' +
      '}\n\n' +
      'export function ' + fnName + '(container) {\n' +
      '  const total = new ' + capitalize(name) + '().compute();\n' +
      '  const el = document.createElement("div");\n' +
      '  el.className = "' + blkClass + '";\n' +
      '  el.textContent = `' + name + ': ${total}`;\n' +
      '  container.appendChild(el);\n' +
      '  return total;\n' +
      '}\n';
  } else {
    body =
      'export function ' + fnName + '(container, opts = {}) {\n' +
      '  const base = opts?.seed ?? ' + int(1, 50) + ';\n' +
      '  const values = [' +
      picked.map((fn) => fn + '(base)').join(', ') +
      '];\n' +
      '  const total = values.reduce((a, b) => a + b, 0);\n' +
      '  const el = document.createElement("div");\n' +
      '  el.className = "' + blkClass + '";\n' +
      '  el.textContent = `' + name + ': ${total}`;\n' +
      '  container.appendChild(el);\n' +
      '  return total;\n' +
      '}\n';
  }

  const header =
    '// 生成ファイル（04-bench/generate.mjs）。手で編集しない。\n' +
    '// lib/index.js（バレル）から named import。CSS も import する。\n\n';

  write('components/' + name + '.js', header + importLines.join('\n') + body);
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------------------------------------------------------------------------
// 4. pages/ — コンポーネントを静的 import してまとめる。
//    common プールは全ページが共通で import する（共有チャンクに実際の仕事をさせる）。
//    それ以外は 40 ページに排他的に振り分ける（ランダムな交差はさせない）。
// ---------------------------------------------------------------------------
const commonCount = Math.max(PAGE_COUNT, Math.round(N * COMMON_RATIO));
const commonComponents = componentNames.slice(0, commonCount);
const dedicatedComponents = componentNames.slice(commonCount);

const pageBuckets = Array.from({ length: PAGE_COUNT }, () => []);
dedicatedComponents.forEach((name, i) => {
  pageBuckets[i % PAGE_COUNT].push(name);
});

for (let p = 0; p < PAGE_COUNT; p++) {
  const pageId = pad(p, 2);
  const own = pageBuckets[p];
  const all = commonComponents.concat(own);

  const importLines = all.map(
    (name) => "import { render" + name + " } from '../components/" + name + ".js';"
  );

  const callLines = all.map((name) => '  total += render' + name + '(container);');

  const content =
    '// 生成ファイル（04-bench/generate.mjs）。手で編集しない。\n' +
    '// common プール ' + commonComponents.length + ' 個 ＋ 専用 ' + own.length + ' 個を静的 import。\n\n' +
    importLines.join('\n') +
    '\n\n' +
    'export function run(container) {\n' +
    '  let total = 0;\n' +
    callLines.join('\n') +
    '\n' +
    '  return total;\n' +
    '}\n';

  write('pages/page' + pageId + '.js', content);
}

// ---------------------------------------------------------------------------
// 5. main.js / style.css — エントリポイント。40 ページをフラットに動的 import する
//    （ページ→ページの連鎖はしない。main.js から直接 40 本）。
// ---------------------------------------------------------------------------
const pageImportCases = Array.from({ length: PAGE_COUNT }, (_, p) => {
  const pageId = pad(p, 2);
  return (
    '    case ' + p + ':\n' +
    "      return import('./pages/page" + pageId + ".js');"
  );
}).join('\n');

const mainContent =
  '// 生成ファイル（04-bench/generate.mjs）。手で編集しない。\n' +
  "import './style.css';\n\n" +
  '// 40 ページへのフラットな動的 import（クリックされたページだけロードされる）。\n' +
  '// ページ→ページの連鎖 import はしない。\n' +
  'function loadPage(index) {\n' +
  '  switch (index) {\n' +
  pageImportCases +
  '\n' +
  '    default:\n' +
  '      throw new Error("unknown page: " + index);\n' +
  '  }\n' +
  '}\n\n' +
  'const app = document.querySelector("#app");\n' +
  'const nav = document.createElement("div");\n' +
  'const container = document.createElement("div");\n' +
  'app.appendChild(nav);\n' +
  'app.appendChild(container);\n\n' +
  'for (let i = 0; i < ' + PAGE_COUNT + '; i++) {\n' +
  '  const btn = document.createElement("button");\n' +
  '  btn.type = "button";\n' +
  '  btn.textContent = "page " + i;\n' +
  '  btn.addEventListener("click", async () => {\n' +
  '    container.innerHTML = "";\n' +
  '    const mod = await loadPage(i);\n' +
  '    mod.run(container);\n' +
  '  });\n' +
  '  nav.appendChild(btn);\n' +
  '}\n';

write('main.js', mainContent);

write(
  'style.css',
  '/* 生成ファイル（04-bench/generate.mjs）。手で編集しない。 */\n' +
    ':root {\n' +
    '  color-scheme: light dark;\n' +
    '  font-family: system-ui, sans-serif;\n' +
    '}\n\n' +
    'body {\n' +
    '  margin: 0;\n' +
    '  padding: 1rem;\n' +
    '}\n\n' +
    'button {\n' +
    '  margin: 0.15rem;\n' +
    '}\n'
);

// ---------------------------------------------------------------------------
// index.html
// ---------------------------------------------------------------------------
const indexHtml =
  '<!doctype html>\n' +
  '<html lang="ja">\n' +
  '  <head>\n' +
  '    <meta charset="UTF-8" />\n' +
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
  '    <title>04 Bench</title>\n' +
  '  </head>\n' +
  '  <body>\n' +
  '    <div id="app"></div>\n' +
  '    <!--\n' +
  '      生成ファイル（04-bench/generate.mjs が app/index.html も書き出す）。\n' +
  '      vite7/index.html と vite8/index.html はこのファイルへの symlink。\n' +
  '    -->\n' +
  '    <script type="module" src="/src/main.js"></script>\n' +
  '  </body>\n' +
  '</html>\n';
mkdirSync(APP_DIR, { recursive: true });
writeFileSync(path.join(APP_DIR, 'index.html'), indexHtml, 'utf8');
fileCount += 1;

// ---------------------------------------------------------------------------
console.log('generated ' + fileCount + ' files into 04-bench/app/');
console.log('  components: ' + N + ' (common: ' + commonComponents.length + ', dedicated: ' + dedicatedComponents.length + ')');
console.log('  leaf modules: ' + leafCount + ' across ' + groupCount + ' barrel groups');
console.log('  pages: ' + PAGE_COUNT);
