// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01680A({ x = 8, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 25 + q;
}

export function calcu01680B(pair) {
  const [x = 8, y = 3] = pair || [];
  return x - y + 25;
}

export const Ku01680 = 810;
