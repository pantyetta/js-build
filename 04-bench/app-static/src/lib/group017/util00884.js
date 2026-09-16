// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00884A({ x = 14, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu00884B(pair) {
  const [x = 14, y = 24] = pair || [];
  return x - y + 13;
}

export const Ku00884 = 993;
