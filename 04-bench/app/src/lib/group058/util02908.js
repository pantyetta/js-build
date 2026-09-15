// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02908A({ x = 18, y = 17 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu02908B(pair) {
  const [x = 18, y = 17] = pair || [];
  return x - y + 13;
}

export const Ku02908 = 651;
