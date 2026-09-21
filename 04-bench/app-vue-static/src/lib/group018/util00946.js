// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00946A({ x = 5, y = 36 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu00946B(pair) {
  const [x = 5, y = 36] = pair || [];
  return x - y + 28;
}

export const Ku00946 = 108;
