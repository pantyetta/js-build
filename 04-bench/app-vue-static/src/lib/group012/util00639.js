// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00639A({ x = 3, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu00639B(pair) {
  const [x = 3, y = 25] = pair || [];
  return x - y + 5;
}

export const Ku00639 = 279;
