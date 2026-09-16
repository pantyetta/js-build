// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00396A({ x = 11, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 25 + q;
}

export function calcu00396B(pair) {
  const [x = 11, y = 28] = pair || [];
  return x - y + 25;
}

export const Ku00396 = 12;
