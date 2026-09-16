// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01696A({ x = 4, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu01696B(pair) {
  const [x = 4, y = 3] = pair || [];
  return x - y + 2;
}

export const Ku01696 = 738;
