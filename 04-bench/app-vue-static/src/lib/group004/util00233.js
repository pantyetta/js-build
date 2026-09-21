// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00233A({ x = 19, y = 10 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu00233B(pair) {
  const [x = 19, y = 10] = pair || [];
  return x - y + 2;
}

export const Ku00233 = 162;
