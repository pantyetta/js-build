// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02730A({ x = 5, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu02730B(pair) {
  const [x = 5, y = 29] = pair || [];
  return x - y + 22;
}

export const Ku02730 = 573;
