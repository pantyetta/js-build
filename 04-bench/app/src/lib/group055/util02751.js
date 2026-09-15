// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02751A({ x = 8, y = 14 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu02751B(pair) {
  const [x = 8, y = 14] = pair || [];
  return x - y + 13;
}

export const Ku02751 = 808;
