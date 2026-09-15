// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00311A({ x = 4, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 12 + q;
}

export function calcu00311B(pair) {
  const [x = 4, y = 29] = pair || [];
  return x - y + 12;
}

export const Ku00311 = 254;
