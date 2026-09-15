// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01483A({ x = 19, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu01483B(pair) {
  const [x = 19, y = 37] = pair || [];
  return x - y + 3;
}

export const Ku01483 = 628;
