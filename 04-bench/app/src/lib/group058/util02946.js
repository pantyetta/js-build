// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02946A({ x = 8, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu02946B(pair) {
  const [x = 8, y = 34] = pair || [];
  return x - y + 22;
}

export const Ku02946 = 930;
