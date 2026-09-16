// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00493A({ x = 17, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu00493B(pair) {
  const [x = 17, y = 12] = pair || [];
  return x - y + 28;
}

export const Ku00493 = 949;
