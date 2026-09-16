// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01932A({ x = 7, y = 10 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu01932B(pair) {
  const [x = 7, y = 10] = pair || [];
  return x - y + 23;
}

export const Ku01932 = 254;
