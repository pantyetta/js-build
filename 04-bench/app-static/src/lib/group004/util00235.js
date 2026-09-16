// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00235A({ x = 16, y = 19 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu00235B(pair) {
  const [x = 16, y = 19] = pair || [];
  return x - y + 23;
}

export const Ku00235 = 902;
