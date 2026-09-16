// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01382A({ x = 15, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu01382B(pair) {
  const [x = 15, y = 29] = pair || [];
  return x - y + 18;
}

export const Ku01382 = 205;
