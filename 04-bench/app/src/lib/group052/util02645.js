// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02645A({ x = 3, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu02645B(pair) {
  const [x = 3, y = 15] = pair || [];
  return x - y + 28;
}

export const Ku02645 = 208;
