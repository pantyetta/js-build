// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01632A({ x = 3, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu01632B(pair) {
  const [x = 3, y = 15] = pair || [];
  return x - y + 20;
}

export const Ku01632 = 882;
