// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00673A({ x = 6, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu00673B(pair) {
  const [x = 6, y = 3] = pair || [];
  return x - y + 24;
}

export const Ku00673 = 586;
