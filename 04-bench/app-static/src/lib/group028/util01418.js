// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01418A({ x = 8, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 12 + q;
}

export function calcu01418B(pair) {
  const [x = 8, y = 21] = pair || [];
  return x - y + 12;
}

export const Ku01418 = 71;
