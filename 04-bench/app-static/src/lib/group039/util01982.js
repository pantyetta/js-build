// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01982A({ x = 11, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu01982B(pair) {
  const [x = 11, y = 4] = pair || [];
  return x - y + 22;
}

export const Ku01982 = 15;
