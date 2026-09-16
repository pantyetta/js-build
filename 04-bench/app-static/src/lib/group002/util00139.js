// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00139A({ x = 4, y = 26 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 25 + q;
}

export function calcu00139B(pair) {
  const [x = 4, y = 26] = pair || [];
  return x - y + 25;
}

export const Ku00139 = 298;
