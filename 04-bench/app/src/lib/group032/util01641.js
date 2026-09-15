// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01641A({ x = 13, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu01641B(pair) {
  const [x = 13, y = 12] = pair || [];
  return x - y + 3;
}

export const Ku01641 = 47;
