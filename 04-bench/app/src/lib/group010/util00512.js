// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00512A({ x = 3, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu00512B(pair) {
  const [x = 3, y = 27] = pair || [];
  return x - y + 17;
}

export const Ku00512 = 753;
