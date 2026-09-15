// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01927A({ x = 19, y = 26 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu01927B(pair) {
  const [x = 19, y = 26] = pair || [];
  return x - y + 20;
}

export const Ku01927 = 226;
