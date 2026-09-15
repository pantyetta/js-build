// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01516A({ x = 8, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu01516B(pair) {
  const [x = 8, y = 12] = pair || [];
  return x - y + 18;
}

export const Ku01516 = 911;
