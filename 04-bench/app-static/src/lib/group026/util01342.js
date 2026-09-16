// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01342A({ x = 12, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu01342B(pair) {
  const [x = 12, y = 5] = pair || [];
  return x - y + 4;
}

export const Ku01342 = 41;
