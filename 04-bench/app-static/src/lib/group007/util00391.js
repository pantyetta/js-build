// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00391A({ x = 13, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu00391B(pair) {
  const [x = 13, y = 4] = pair || [];
  return x - y + 4;
}

export const Ku00391 = 915;
