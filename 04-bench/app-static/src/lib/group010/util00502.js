// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00502A({ x = 19, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu00502B(pair) {
  const [x = 19, y = 12] = pair || [];
  return x - y + 26;
}

export const Ku00502 = 481;
