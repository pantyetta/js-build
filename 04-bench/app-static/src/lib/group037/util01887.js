// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01887A({ x = 12, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu01887B(pair) {
  const [x = 12, y = 23] = pair || [];
  return x - y + 11;
}

export const Ku01887 = 228;
