// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00007A({ x = 7, y = 17 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu00007B(pair) {
  const [x = 7, y = 17] = pair || [];
  return x - y + 13;
}

export const Ku00007 = 745;
