// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01662A({ x = 15, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 12 + q;
}

export function calcu01662B(pair) {
  const [x = 15, y = 27] = pair || [];
  return x - y + 12;
}

export const Ku01662 = 476;
