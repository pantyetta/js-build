// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02374A({ x = 5, y = 17 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu02374B(pair) {
  const [x = 5, y = 17] = pair || [];
  return x - y + 23;
}

export const Ku02374 = 329;
