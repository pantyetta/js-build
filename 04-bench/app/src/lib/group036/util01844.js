// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01844A({ x = 18, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu01844B(pair) {
  const [x = 18, y = 30] = pair || [];
  return x - y + 26;
}

export const Ku01844 = 668;
