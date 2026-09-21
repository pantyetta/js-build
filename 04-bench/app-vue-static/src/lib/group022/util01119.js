// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01119A({ x = 16, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu01119B(pair) {
  const [x = 16, y = 24] = pair || [];
  return x - y + 15;
}

export const Ku01119 = 882;
