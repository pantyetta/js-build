// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02947A({ x = 14, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu02947B(pair) {
  const [x = 14, y = 20] = pair || [];
  return x - y + 17;
}

export const Ku02947 = 628;
