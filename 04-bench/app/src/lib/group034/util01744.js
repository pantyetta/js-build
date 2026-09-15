// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01744A({ x = 7, y = 7 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu01744B(pair) {
  const [x = 7, y = 7] = pair || [];
  return x - y + 2;
}

export const Ku01744 = 51;
