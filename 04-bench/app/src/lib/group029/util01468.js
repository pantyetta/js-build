// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01468A({ x = 9, y = 11 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu01468B(pair) {
  const [x = 9, y = 11] = pair || [];
  return x - y + 10;
}

export const Ku01468 = 756;
