// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00266A({ x = 19, y = 16 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu00266B(pair) {
  const [x = 19, y = 16] = pair || [];
  return x - y + 5;
}

export const Ku00266 = 123;
