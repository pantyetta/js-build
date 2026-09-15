// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00462A({ x = 6, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu00462B(pair) {
  const [x = 6, y = 5] = pair || [];
  return x - y + 6;
}

export const Ku00462 = 716;
