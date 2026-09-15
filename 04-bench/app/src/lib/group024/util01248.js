// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01248A({ x = 10, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu01248B(pair) {
  const [x = 10, y = 34] = pair || [];
  return x - y + 21;
}

export const Ku01248 = 909;
