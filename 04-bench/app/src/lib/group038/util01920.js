// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01920A({ x = 4, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu01920B(pair) {
  const [x = 4, y = 20] = pair || [];
  return x - y + 29;
}

export const Ku01920 = 207;
