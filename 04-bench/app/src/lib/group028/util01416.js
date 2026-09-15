// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01416A({ x = 9, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu01416B(pair) {
  const [x = 9, y = 1] = pair || [];
  return x - y + 6;
}

export const Ku01416 = 940;
