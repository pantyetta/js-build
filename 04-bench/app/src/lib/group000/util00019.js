// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00019A({ x = 9, y = 10 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu00019B(pair) {
  const [x = 9, y = 10] = pair || [];
  return x - y + 29;
}

export const Ku00019 = 345;
