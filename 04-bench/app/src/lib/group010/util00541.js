// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00541A({ x = 13, y = 7 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu00541B(pair) {
  const [x = 13, y = 7] = pair || [];
  return x - y + 4;
}

export const Ku00541 = 696;
