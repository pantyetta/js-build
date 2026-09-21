// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00993A({ x = 2, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu00993B(pair) {
  const [x = 2, y = 34] = pair || [];
  return x - y + 28;
}

export const Ku00993 = 907;
