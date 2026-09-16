// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01593A({ x = 2, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu01593B(pair) {
  const [x = 2, y = 27] = pair || [];
  return x - y + 8;
}

export const Ku01593 = 165;
