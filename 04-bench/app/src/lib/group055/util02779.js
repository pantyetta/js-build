// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02779A({ x = 13, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu02779B(pair) {
  const [x = 13, y = 25] = pair || [];
  return x - y + 14;
}

export const Ku02779 = 862;
