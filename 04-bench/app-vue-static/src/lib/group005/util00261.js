// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00261A({ x = 14, y = 26 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 12 + q;
}

export function calcu00261B(pair) {
  const [x = 14, y = 26] = pair || [];
  return x - y + 12;
}

export const Ku00261 = 146;
