// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01919A({ x = 2, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu01919B(pair) {
  const [x = 2, y = 23] = pair || [];
  return x - y + 1;
}

export const Ku01919 = 390;
