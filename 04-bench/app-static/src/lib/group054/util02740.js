// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02740A({ x = 16, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu02740B(pair) {
  const [x = 16, y = 21] = pair || [];
  return x - y + 1;
}

export const Ku02740 = 233;
