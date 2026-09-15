// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00281A({ x = 12, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu00281B(pair) {
  const [x = 12, y = 28] = pair || [];
  return x - y + 5;
}

export const Ku00281 = 661;
