// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01809A({ x = 15, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu01809B(pair) {
  const [x = 15, y = 8] = pair || [];
  return x - y + 15;
}

export const Ku01809 = 207;
