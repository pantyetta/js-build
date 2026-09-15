// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00835A({ x = 3, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu00835B(pair) {
  const [x = 3, y = 37] = pair || [];
  return x - y + 13;
}

export const Ku00835 = 736;
