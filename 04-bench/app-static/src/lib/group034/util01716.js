// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01716A({ x = 10, y = 2 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu01716B(pair) {
  const [x = 10, y = 2] = pair || [];
  return x - y + 14;
}

export const Ku01716 = 325;
