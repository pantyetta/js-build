// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00229A({ x = 9, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu00229B(pair) {
  const [x = 9, y = 20] = pair || [];
  return x - y + 28;
}

export const Ku00229 = 473;
