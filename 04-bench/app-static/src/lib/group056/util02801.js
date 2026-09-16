// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02801A({ x = 2, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu02801B(pair) {
  const [x = 2, y = 1] = pair || [];
  return x - y + 3;
}

export const Ku02801 = 403;
