// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01825A({ x = 19, y = 26 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu01825B(pair) {
  const [x = 19, y = 26] = pair || [];
  return x - y + 22;
}

export const Ku01825 = 576;
