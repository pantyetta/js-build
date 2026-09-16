// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01363A({ x = 6, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu01363B(pair) {
  const [x = 6, y = 30] = pair || [];
  return x - y + 1;
}

export const Ku01363 = 201;
