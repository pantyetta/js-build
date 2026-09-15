// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00735A({ x = 8, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu00735B(pair) {
  const [x = 8, y = 21] = pair || [];
  return x - y + 17;
}

export const Ku00735 = 822;
