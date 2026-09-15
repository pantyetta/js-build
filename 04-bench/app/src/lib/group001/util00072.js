// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00072A({ x = 10, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu00072B(pair) {
  const [x = 10, y = 25] = pair || [];
  return x - y + 3;
}

export const Ku00072 = 36;
