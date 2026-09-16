// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01600A({ x = 13, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu01600B(pair) {
  const [x = 13, y = 30] = pair || [];
  return x - y + 24;
}

export const Ku01600 = 226;
