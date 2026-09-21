#!/usr/bin/env node
// 04-bench/generate-vue.mjs
//
// generate.mjs（プレーン JS 版）と同じ考え方で、Vue 3 の SFC（.vue）を使った
// 「コード分割なし・静的 import のみ・単一バンドル」プロジェクトを 1 箇所（既定 app-vue-static/）
// に生成する。目的は generate.mjs の app-static/ と同じスケール感（Vite 7 で ~30s 前後）で、
// @vitejs/plugin-vue の SFC コンパイル（template → render 関数 / scoped CSS 書き換え）が
// Rollup（Vite 7）と Rolldown（Vite 8）でどう変わるかを実測できるソースを用意すること。
//
// app-static/ との違い：
//   - lib/ の葉モジュールはプレーン JS のまま（Vue と無関係な純関数。ここは generate.mjs と同じ生成ロジック）
//   - components/ と pages/ は .js ではなく .vue（<script setup> + <template> + <style scoped>）
//   - CSS は外部ファイルに切り出さず、コンポーネントごとの <style scoped> に埋め込む
//     （SFC の scoped CSS 書き換えコストも含めて測るため。app-static/ のように「CSS の影響を
//     2% 未満に抑える」設計にはしていない — Vue アプリの実態に近づけるのがこの版の狙い）
//   - 動的 import 版は作らない（static import のみでよい、という要望に合わせている）
//
// 【重要】ここに置いた既定の --modules 値は未検証（このセッションでは node/npm が使えず、
// 実際にビルドして計測できていない）。SFC は 1 ファイルあたりプレーン JS より重い
// （テンプレートのコンパイル・scoped CSS の書き換えが乗る）ため、generate.mjs の N=3750 を
// そのまま使うと Vite 7 で 30s を大きく超える可能性が高い。まずは既定値で 1 回ビルドして、
// Vite 7 の時間を見ながら --modules を上下させてキャリブレーションすること
// （やり方は 04-bench/README.md の「Vue 版のキャリブレーション」を参照）。
//
// Usage:
//   node generate-vue.mjs                      # 既定 N=1200 で app-vue-static/ を生成
//   node generate-vue.mjs --modules 800         # 規模を変えて試す（キャリブレーション用）
//   node generate-vue.mjs --out app-vue-static2 # 出力先を変える

import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = 'src';

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
function argVal(flag, fallback) {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : fallback;
}

// 未検証の初期値。generate.mjs の N=3750（プレーン JS で Vite 7 ~29〜31s）の
// 目安として、SFC 1 個あたりの重さを 3 倍程度と仮置きしてざっくり 1/3 にしてある。
// 実測して --modules を調整すること。
const N = parseInt(argVal('--modules', '2000'), 10);
const OUT_NAME = argVal('--out', 'app-vue-static');
const APP_DIR = path.join(__dirname, OUT_NAME);

const PAGE_COUNT = 40;
const LEAVES_PER_GROUP = 50;
const COMMON_RATIO = 0.05; // 全ページ共通で読み込むコンポーネントの割合

// ---------------------------------------------------------------------------
// 決定論的 PRNG（mulberry32）。generate.mjs と同じアルゴリズム・同じシード。
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
// 出力ヘルパ：常に LF で書く
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

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------------------------------------------------------------------------
// リセット
// ---------------------------------------------------------------------------
if (existsSync(APP_DIR)) rmSync(APP_DIR, { recursive: true, force: true });

// ---------------------------------------------------------------------------
// 1. lib/ 葉モジュール — generate.mjs と同じ生成ロジック（プレーン JS、Vue 非依存）
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
      body =
        'export const ' + fnA + ' = (x = ' + A + ') => x * ' + B + ' - ' + C + ';\n\n' +
        'export const ' + fnB + ' = (x = ' + C + ', y = ' + A + ') => (x + y) * ' + B + ';\n';
      break;
    case 2:
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
    '// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。\n' +
    '// variant ' + (variantIdx % 6) + ' — import なしの葉モジュール（Vue 非依存）。\n\n';

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
    '// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。',
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

const topBarrelLines = [
  '// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。',
  '// 全グループバレルをまとめる、lib/ のエントリポイント。components/*.vue はここから import する。',
  '',
];
for (let g = 0; g < groupCount; g++) {
  topBarrelLines.push("export * from './group" + pad(g, 3) + "/index.js';");
}
write('lib/index.js', topBarrelLines.join('\n') + '\n');

// ---------------------------------------------------------------------------
// 2. components/ — Vue SFC。<script setup> で lib のバレルから 3〜5 個 named import して
//    computed で合成し、<template> に表示、<style scoped> を 1 ブロック持つ。
//    CSS は外部ファイルに切り出さず、コンポーネントごとに埋め込む
//    （scoped CSS の書き換えコストも計測対象に含めるため）。
// ---------------------------------------------------------------------------
const componentNames = []; // 'comp00000' など（ファイル名・import パス用）
const componentTags = []; // 'Comp00000' など（テンプレートのタグ名用）

for (let i = 0; i < N; i++) {
  const name = 'comp' + pad(i);
  const tag = capitalize(name);
  componentNames.push(name);
  componentTags.push(tag);

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

  const hue = int(0, 359);
  const seed = int(1, 50);
  const importNames = picked.join(', ');
  const exprTerms = picked
    .map((fn, idx) => (idx === 0 ? fn + '(seed)' : (idx % 2 === 0 ? ' + ' : ' - ') + fn + '(seed)'))
    .join('');

  const content =
    '<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->\n' +
    '<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->\n' +
    '<script setup>\n' +
    'import { computed } from \'vue\';\n' +
    'import { ' + importNames + " } from '../lib/index.js';\n\n" +
    'const seed = ' + seed + ';\n' +
    'const total = computed(() => ' + exprTerms + ');\n' +
    '</script>\n\n' +
    '<template>\n' +
    '  <div class="blk">' + name + ': {{ total }}</div>\n' +
    '</template>\n\n' +
    '<style scoped>\n' +
    '.blk {\n' +
    '  color: hsl(' + hue + ' 70% 40%);\n' +
    '  padding: 0.25rem;\n' +
    '  margin: 0.1rem;\n' +
    '  border: 1px solid hsl(' + ((hue + 180) % 360) + ' 50% 50%);\n' +
    '  display: inline-block;\n' +
    '}\n' +
    '</style>\n';

  write('components/' + name + '.vue', content);
}

// ---------------------------------------------------------------------------
// 3. pages/ — コンポーネントを静的 import してまとめる Vue SFC。
//    common プールは全ページが共通で import する。それ以外は 40 ページに排他的に振り分ける。
// ---------------------------------------------------------------------------
const commonCount = Math.max(PAGE_COUNT, Math.round(N * COMMON_RATIO));
const commonIdx = Array.from({ length: commonCount }, (_, i) => i);
const dedicatedIdx = Array.from({ length: N - commonCount }, (_, i) => i + commonCount);

const pageBuckets = Array.from({ length: PAGE_COUNT }, () => []);
dedicatedIdx.forEach((idx, i) => {
  pageBuckets[i % PAGE_COUNT].push(idx);
});

const pageTags = [];
for (let p = 0; p < PAGE_COUNT; p++) {
  const pageId = pad(p, 2);
  const pageTag = 'Page' + pageId;
  pageTags.push(pageTag);
  const ownIdx = pageBuckets[p];
  const allIdx = commonIdx.concat(ownIdx);

  const importLines = allIdx.map(
    (idx) => "import " + componentTags[idx] + " from '../components/" + componentNames[idx] + ".vue';"
  );
  const templateLines = allIdx.map((idx) => '    <' + componentTags[idx] + ' />');

  const content =
    '<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->\n' +
    '<!-- common プール ' + commonIdx.length + ' 個 ＋ 専用 ' + ownIdx.length + ' 個を静的 import。 -->\n' +
    '<script setup>\n' +
    importLines.join('\n') +
    '\n</script>\n\n' +
    '<template>\n' +
    '  <div class="page">\n' +
    templateLines.join('\n') +
    '\n  </div>\n' +
    '</template>\n';

  write('pages/page' + pageId + '.vue', content);
}

// ---------------------------------------------------------------------------
// 4. App.vue — 40 ページを全部静的 import（import() は使わない・単一バンドル）。
//    ボタンで表示するページを切り替えるだけで、バンドルされるモジュールは常に全ページ分。
// ---------------------------------------------------------------------------
const appImportLines = pageTags.map(
  (tag, p) => "import " + tag + " from './pages/page" + pad(p, 2) + ".vue';"
);
const appListEntries = pageTags.map((tag) => tag).join(',\n  ');

const appContent =
  '<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->\n' +
  '<!-- 40 ページを全部静的 import。import() は 1 つも使わない（コード分割なし・単一バンドル）。 -->\n' +
  '<script setup>\n' +
  "import { ref, shallowRef } from 'vue';\n" +
  appImportLines.join('\n') +
  '\n\n' +
  'const pages = [\n  ' + appListEntries + ',\n];\n' +
  'const current = ref(0);\n' +
  'const currentPage = shallowRef(pages[0]);\n\n' +
  'function select(i) {\n' +
  '  current.value = i;\n' +
  '  currentPage.value = pages[i];\n' +
  '}\n' +
  '</script>\n\n' +
  '<template>\n' +
  '  <div>\n' +
  '    <nav>\n' +
  '      <button\n' +
  '        v-for="(_, i) in pages"\n' +
  '        :key="i"\n' +
  '        type="button"\n' +
  '        @click="select(i)"\n' +
  '      >page {{ i }}</button>\n' +
  '    </nav>\n' +
  '    <component :is="currentPage" />\n' +
  '  </div>\n' +
  '</template>\n';

write('App.vue', appContent);

// ---------------------------------------------------------------------------
// 5. main.js / style.css — エントリポイント。
// ---------------------------------------------------------------------------
const mainContent =
  '// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。\n' +
  "import './style.css';\n" +
  "import { createApp } from 'vue';\n" +
  "import App from './App.vue';\n\n" +
  "createApp(App).mount('#app');\n";
write('main.js', mainContent);

write(
  'style.css',
  '/* 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 */\n' +
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
  '    <title>04 Bench (vue, static, no code splitting)</title>\n' +
  '  </head>\n' +
  '  <body>\n' +
  '    <div id="app"></div>\n' +
  '    <!--\n' +
  '      生成ファイル（04-bench/generate-vue.mjs が ' + OUT_NAME + '/index.html も書き出す）。\n' +
  '      vite7-vue-static/ と vite8-vue-static/ はこのファイルへの symlink。\n' +
  '    -->\n' +
  '    <script type="module" src="/src/main.js"></script>\n' +
  '  </body>\n' +
  '</html>\n';
mkdirSync(APP_DIR, { recursive: true });
writeFileSync(path.join(APP_DIR, 'index.html'), indexHtml, 'utf8');
fileCount += 1;

// ---------------------------------------------------------------------------
console.log('generated ' + fileCount + ' files into 04-bench/' + OUT_NAME + '/');
console.log('  components: ' + N + ' (.vue, common: ' + commonIdx.length + ', dedicated: ' + dedicatedIdx.length + ')');
console.log('  leaf modules: ' + leafCount + ' across ' + groupCount + ' barrel groups (.js, Vue 非依存)');
console.log('  pages: ' + PAGE_COUNT + ' (.vue)');
console.log('  NOTE: --modules の既定値は未検証。Vite 7 のビルド時間を見てキャリブレーションすること。');
