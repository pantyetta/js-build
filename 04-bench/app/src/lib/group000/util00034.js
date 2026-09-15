// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00034A({ x = 8, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu00034B(pair) {
  const [x = 8, y = 30] = pair || [];
  return x - y + 26;
}

export const Ku00034 = 268;
