// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01989A({ x = 15, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu01989B(pair) {
  const [x = 15, y = 37] = pair || [];
  return x - y + 10;
}

export const Ku01989 = 125;
