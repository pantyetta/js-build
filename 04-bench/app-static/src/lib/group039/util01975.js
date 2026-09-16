// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01975A({ x = 9, y = 36 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu01975B(pair) {
  const [x = 9, y = 36] = pair || [];
  return x - y + 20;
}

export const Ku01975 = 864;
