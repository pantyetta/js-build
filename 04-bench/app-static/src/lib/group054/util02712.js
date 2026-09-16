// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02712A({ x = 19, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu02712B(pair) {
  const [x = 19, y = 5] = pair || [];
  return x - y + 18;
}

export const Ku02712 = 14;
