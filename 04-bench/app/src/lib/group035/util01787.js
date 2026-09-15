// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01787A({ x = 16, y = 13 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu01787B(pair) {
  const [x = 16, y = 13] = pair || [];
  return x - y + 22;
}

export const Ku01787 = 136;
