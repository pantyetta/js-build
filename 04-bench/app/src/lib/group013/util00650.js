// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00650A({ x = 5, y = 26 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 19 + q;
}

export function calcu00650B(pair) {
  const [x = 5, y = 26] = pair || [];
  return x - y + 19;
}

export const Ku00650 = 696;
