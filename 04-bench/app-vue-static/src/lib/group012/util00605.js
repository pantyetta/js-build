// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00605A({ x = 14, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 19 + q;
}

export function calcu00605B(pair) {
  const [x = 14, y = 3] = pair || [];
  return x - y + 19;
}

export const Ku00605 = 719;
