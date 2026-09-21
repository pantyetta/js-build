// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00489A({ x = 14, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu00489B(pair) {
  const [x = 14, y = 25] = pair || [];
  return x - y + 20;
}

export const Ku00489 = 446;
