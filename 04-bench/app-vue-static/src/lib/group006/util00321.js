// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00321A({ x = 8, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 7 + q;
}

export function calcu00321B(pair) {
  const [x = 8, y = 4] = pair || [];
  return x - y + 7;
}

export const Ku00321 = 469;
