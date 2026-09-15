// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00821A({ x = 11, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu00821B(pair) {
  const [x = 11, y = 34] = pair || [];
  return x - y + 18;
}

export const Ku00821 = 772;
