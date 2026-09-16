// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00830A({ x = 8, y = 22 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu00830B(pair) {
  const [x = 8, y = 22] = pair || [];
  return x - y + 28;
}

export const Ku00830 = 530;
