// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02506A({ x = 9, y = 32 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu02506B(pair) {
  const [x = 9, y = 32] = pair || [];
  return x - y + 10;
}

export const Ku02506 = 857;
