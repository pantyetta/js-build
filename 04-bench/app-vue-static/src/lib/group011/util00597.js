// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00597A({ x = 11, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu00597B(pair) {
  const [x = 11, y = 4] = pair || [];
  return x - y + 11;
}

export const Ku00597 = 734;
