// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01044A({ x = 18, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu01044B(pair) {
  const [x = 18, y = 21] = pair || [];
  return x - y + 15;
}

export const Ku01044 = 510;
