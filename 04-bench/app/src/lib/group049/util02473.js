// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02473A({ x = 9, y = 13 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu02473B(pair) {
  const [x = 9, y = 13] = pair || [];
  return x - y + 13;
}

export const Ku02473 = 711;
