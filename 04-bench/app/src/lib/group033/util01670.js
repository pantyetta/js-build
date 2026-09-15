// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01670A({ x = 4, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu01670B(pair) {
  const [x = 4, y = 1] = pair || [];
  return x - y + 16;
}

export const Ku01670 = 565;
