// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01740A({ x = 5, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu01740B(pair) {
  const [x = 5, y = 28] = pair || [];
  return x - y + 23;
}

export const Ku01740 = 596;
