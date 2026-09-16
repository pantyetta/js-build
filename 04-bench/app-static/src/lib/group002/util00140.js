// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00140A({ x = 11, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu00140B(pair) {
  const [x = 11, y = 8] = pair || [];
  return x - y + 27;
}

export const Ku00140 = 267;
