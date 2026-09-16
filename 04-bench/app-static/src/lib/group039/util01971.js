// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01971A({ x = 7, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu01971B(pair) {
  const [x = 7, y = 8] = pair || [];
  return x - y + 8;
}

export const Ku01971 = 903;
