// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00981A({ x = 18, y = 35 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu00981B(pair) {
  const [x = 18, y = 35] = pair || [];
  return x - y + 28;
}

export const Ku00981 = 342;
