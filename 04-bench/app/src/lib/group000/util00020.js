// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00020A({ x = 18, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu00020B(pair) {
  const [x = 18, y = 8] = pair || [];
  return x - y + 9;
}

export const Ku00020 = 723;
