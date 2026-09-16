// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01084A({ x = 6, y = 22 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu01084B(pair) {
  const [x = 6, y = 22] = pair || [];
  return x - y + 14;
}

export const Ku01084 = 745;
