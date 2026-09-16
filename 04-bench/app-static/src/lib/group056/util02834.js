// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02834A({ x = 8, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu02834B(pair) {
  const [x = 8, y = 23] = pair || [];
  return x - y + 23;
}

export const Ku02834 = 587;
