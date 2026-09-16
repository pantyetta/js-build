// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00841A({ x = 5, y = 11 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu00841B(pair) {
  const [x = 5, y = 11] = pair || [];
  return x - y + 6;
}

export const Ku00841 = 534;
