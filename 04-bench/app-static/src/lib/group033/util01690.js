// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01690A({ x = 11, y = 18 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu01690B(pair) {
  const [x = 11, y = 18] = pair || [];
  return x - y + 9;
}

export const Ku01690 = 199;
