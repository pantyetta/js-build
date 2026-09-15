// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02769A({ x = 14, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu02769B(pair) {
  const [x = 14, y = 23] = pair || [];
  return x - y + 5;
}

export const Ku02769 = 133;
