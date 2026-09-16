// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01784A({ x = 4, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu01784B(pair) {
  const [x = 4, y = 21] = pair || [];
  return x - y + 22;
}

export const Ku01784 = 786;
