// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00177A({ x = 7, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu00177B(pair) {
  const [x = 7, y = 6] = pair || [];
  return x - y + 15;
}

export const Ku00177 = 440;
