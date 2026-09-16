// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02486A({ x = 7, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu02486B(pair) {
  const [x = 7, y = 4] = pair || [];
  return x - y + 20;
}

export const Ku02486 = 493;
