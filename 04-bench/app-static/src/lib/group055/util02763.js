// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02763A({ x = 15, y = 33 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu02763B(pair) {
  const [x = 15, y = 33] = pair || [];
  return x - y + 6;
}

export const Ku02763 = 781;
