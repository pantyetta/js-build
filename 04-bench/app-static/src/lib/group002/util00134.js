// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00134A({ x = 17, y = 11 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu00134B(pair) {
  const [x = 17, y = 11] = pair || [];
  return x - y + 13;
}

export const Ku00134 = 968;
