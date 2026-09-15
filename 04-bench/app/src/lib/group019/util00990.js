// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00990A({ x = 16, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu00990B(pair) {
  const [x = 16, y = 27] = pair || [];
  return x - y + 11;
}

export const Ku00990 = 887;
