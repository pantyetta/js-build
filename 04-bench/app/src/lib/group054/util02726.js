// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02726A({ x = 13, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu02726B(pair) {
  const [x = 13, y = 30] = pair || [];
  return x - y + 6;
}

export const Ku02726 = 506;
