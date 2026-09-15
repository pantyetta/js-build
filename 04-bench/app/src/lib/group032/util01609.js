// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01609A({ x = 3, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu01609B(pair) {
  const [x = 3, y = 30] = pair || [];
  return x - y + 23;
}

export const Ku01609 = 712;
