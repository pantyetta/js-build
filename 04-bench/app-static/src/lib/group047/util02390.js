// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02390A({ x = 4, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu02390B(pair) {
  const [x = 4, y = 28] = pair || [];
  return x - y + 10;
}

export const Ku02390 = 318;
