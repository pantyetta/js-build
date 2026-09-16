// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01781A({ x = 14, y = 32 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu01781B(pair) {
  const [x = 14, y = 32] = pair || [];
  return x - y + 20;
}

export const Ku01781 = 3;
