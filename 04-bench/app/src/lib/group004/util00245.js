// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00245A({ x = 16, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu00245B(pair) {
  const [x = 16, y = 1] = pair || [];
  return x - y + 9;
}

export const Ku00245 = 251;
