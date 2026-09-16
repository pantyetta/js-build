// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01924A({ x = 11, y = 13 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu01924B(pair) {
  const [x = 11, y = 13] = pair || [];
  return x - y + 6;
}

export const Ku01924 = 976;
