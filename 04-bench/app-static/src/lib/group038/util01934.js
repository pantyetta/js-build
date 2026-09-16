// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01934A({ x = 14, y = 26 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu01934B(pair) {
  const [x = 14, y = 26] = pair || [];
  return x - y + 6;
}

export const Ku01934 = 88;
