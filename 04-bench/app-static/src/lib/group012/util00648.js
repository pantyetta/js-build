// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00648A({ x = 15, y = 18 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu00648B(pair) {
  const [x = 15, y = 18] = pair || [];
  return x - y + 1;
}

export const Ku00648 = 529;
