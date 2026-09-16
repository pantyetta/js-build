// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00932A({ x = 12, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 12 + q;
}

export function calcu00932B(pair) {
  const [x = 12, y = 1] = pair || [];
  return x - y + 12;
}

export const Ku00932 = 154;
