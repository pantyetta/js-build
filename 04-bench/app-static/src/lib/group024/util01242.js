// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01242A({ x = 4, y = 35 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu01242B(pair) {
  const [x = 4, y = 35] = pair || [];
  return x - y + 3;
}

export const Ku01242 = 107;
