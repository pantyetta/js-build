// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01022A({ x = 4, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu01022B(pair) {
  const [x = 4, y = 12] = pair || [];
  return x - y + 13;
}

export const Ku01022 = 548;
