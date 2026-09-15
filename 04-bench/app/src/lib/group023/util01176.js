// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01176A({ x = 18, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu01176B(pair) {
  const [x = 18, y = 12] = pair || [];
  return x - y + 21;
}

export const Ku01176 = 153;
