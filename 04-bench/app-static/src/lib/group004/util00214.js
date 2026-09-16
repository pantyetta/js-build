// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00214A({ x = 2, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu00214B(pair) {
  const [x = 2, y = 29] = pair || [];
  return x - y + 15;
}

export const Ku00214 = 243;
