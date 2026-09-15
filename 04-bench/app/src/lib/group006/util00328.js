// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00328A({ x = 15, y = 22 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu00328B(pair) {
  const [x = 15, y = 22] = pair || [];
  return x - y + 9;
}

export const Ku00328 = 746;
