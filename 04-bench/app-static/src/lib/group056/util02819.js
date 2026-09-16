// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02819A({ x = 8, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu02819B(pair) {
  const [x = 8, y = 24] = pair || [];
  return x - y + 10;
}

export const Ku02819 = 789;
