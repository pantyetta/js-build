// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02272A({ x = 7, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu02272B(pair) {
  const [x = 7, y = 29] = pair || [];
  return x - y + 29;
}

export const Ku02272 = 183;
