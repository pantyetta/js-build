// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00825A({ x = 8, y = 31 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu00825B(pair) {
  const [x = 8, y = 31] = pair || [];
  return x - y + 1;
}

export const Ku00825 = 623;
