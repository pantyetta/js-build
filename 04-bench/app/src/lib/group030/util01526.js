// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01526A({ x = 6, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu01526B(pair) {
  const [x = 6, y = 29] = pair || [];
  return x - y + 28;
}

export const Ku01526 = 266;
