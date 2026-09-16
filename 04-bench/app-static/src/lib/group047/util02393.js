// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02393A({ x = 12, y = 11 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu02393B(pair) {
  const [x = 12, y = 11] = pair || [];
  return x - y + 29;
}

export const Ku02393 = 870;
