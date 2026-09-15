// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00096A({ x = 15, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu00096B(pair) {
  const [x = 15, y = 21] = pair || [];
  return x - y + 24;
}

export const Ku00096 = 398;
