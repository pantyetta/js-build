// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00162A({ x = 12, y = 13 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu00162B(pair) {
  const [x = 12, y = 13] = pair || [];
  return x - y + 13;
}

export const Ku00162 = 571;
