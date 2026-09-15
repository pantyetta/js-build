// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00354A({ x = 2, y = 14 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 12 + q;
}

export function calcu00354B(pair) {
  const [x = 2, y = 14] = pair || [];
  return x - y + 12;
}

export const Ku00354 = 751;
