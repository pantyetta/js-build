// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00202A({ x = 3, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 19 + q;
}

export function calcu00202B(pair) {
  const [x = 3, y = 8] = pair || [];
  return x - y + 19;
}

export const Ku00202 = 83;
