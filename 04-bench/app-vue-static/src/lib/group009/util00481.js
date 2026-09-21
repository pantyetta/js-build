// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00481A({ x = 3, y = 14 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu00481B(pair) {
  const [x = 3, y = 14] = pair || [];
  return x - y + 14;
}

export const Ku00481 = 404;
