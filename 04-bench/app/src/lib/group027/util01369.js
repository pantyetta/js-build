// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01369A({ x = 9, y = 2 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu01369B(pair) {
  const [x = 9, y = 2] = pair || [];
  return x - y + 24;
}

export const Ku01369 = 257;
