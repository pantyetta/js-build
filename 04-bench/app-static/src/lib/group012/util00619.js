// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00619A({ x = 12, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu00619B(pair) {
  const [x = 12, y = 9] = pair || [];
  return x - y + 11;
}

export const Ku00619 = 178;
