// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01286A({ x = 13, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu01286B(pair) {
  const [x = 13, y = 20] = pair || [];
  return x - y + 13;
}

export const Ku01286 = 238;
