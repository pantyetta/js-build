// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02566A({ x = 2, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu02566B(pair) {
  const [x = 2, y = 27] = pair || [];
  return x - y + 16;
}

export const Ku02566 = 857;
