// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00030A({ x = 14, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu00030B(pair) {
  const [x = 14, y = 3] = pair || [];
  return x - y + 9;
}

export const Ku00030 = 685;
