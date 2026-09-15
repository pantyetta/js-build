// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00451A({ x = 14, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu00451B(pair) {
  const [x = 14, y = 29] = pair || [];
  return x - y + 15;
}

export const Ku00451 = 455;
