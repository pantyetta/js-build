// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01883A({ x = 16, y = 35 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu01883B(pair) {
  const [x = 16, y = 35] = pair || [];
  return x - y + 2;
}

export const Ku01883 = 874;
