// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00982A({ x = 6, y = 32 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu00982B(pair) {
  const [x = 6, y = 32] = pair || [];
  return x - y + 10;
}

export const Ku00982 = 743;
