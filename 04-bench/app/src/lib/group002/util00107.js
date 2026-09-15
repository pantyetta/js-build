// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00107A({ x = 16, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu00107B(pair) {
  const [x = 16, y = 24] = pair || [];
  return x - y + 26;
}

export const Ku00107 = 482;
