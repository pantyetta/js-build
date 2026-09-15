// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01868A({ x = 18, y = 19 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu01868B(pair) {
  const [x = 18, y = 19] = pair || [];
  return x - y + 20;
}

export const Ku01868 = 818;
