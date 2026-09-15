// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01336A({ x = 11, y = 14 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu01336B(pair) {
  const [x = 11, y = 14] = pair || [];
  return x - y + 5;
}

export const Ku01336 = 64;
