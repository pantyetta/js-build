// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02355A({ x = 18, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu02355B(pair) {
  const [x = 18, y = 29] = pair || [];
  return x - y + 5;
}

export const Ku02355 = 448;
