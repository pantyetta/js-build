// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00738A({ x = 13, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu00738B(pair) {
  const [x = 13, y = 24] = pair || [];
  return x - y + 13;
}

export const Ku00738 = 693;
