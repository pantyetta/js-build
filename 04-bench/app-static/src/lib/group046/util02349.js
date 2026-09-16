// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02349A({ x = 10, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu02349B(pair) {
  const [x = 10, y = 8] = pair || [];
  return x - y + 23;
}

export const Ku02349 = 684;
