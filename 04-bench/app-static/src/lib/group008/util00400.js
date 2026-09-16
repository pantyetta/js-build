// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00400A({ x = 9, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu00400B(pair) {
  const [x = 9, y = 24] = pair || [];
  return x - y + 2;
}

export const Ku00400 = 978;
