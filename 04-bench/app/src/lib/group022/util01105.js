// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01105A({ x = 14, y = 18 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu01105B(pair) {
  const [x = 14, y = 18] = pair || [];
  return x - y + 14;
}

export const Ku01105 = 253;
