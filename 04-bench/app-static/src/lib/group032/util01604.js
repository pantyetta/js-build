// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01604A({ x = 11, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu01604B(pair) {
  const [x = 11, y = 29] = pair || [];
  return x - y + 27;
}

export const Ku01604 = 22;
