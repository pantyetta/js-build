// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00860A({ x = 14, y = 14 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu00860B(pair) {
  const [x = 14, y = 14] = pair || [];
  return x - y + 20;
}

export const Ku00860 = 556;
