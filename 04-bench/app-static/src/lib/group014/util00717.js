// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00717A({ x = 4, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu00717B(pair) {
  const [x = 4, y = 30] = pair || [];
  return x - y + 15;
}

export const Ku00717 = 788;
