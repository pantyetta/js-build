// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00384A({ x = 5, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu00384B(pair) {
  const [x = 5, y = 9] = pair || [];
  return x - y + 14;
}

export const Ku00384 = 857;
