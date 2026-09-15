// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00522A({ x = 13, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu00522B(pair) {
  const [x = 13, y = 20] = pair || [];
  return x - y + 21;
}

export const Ku00522 = 148;
