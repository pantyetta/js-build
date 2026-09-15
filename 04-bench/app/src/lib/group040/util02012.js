// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02012A({ x = 3, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu02012B(pair) {
  const [x = 3, y = 28] = pair || [];
  return x - y + 4;
}

export const Ku02012 = 83;
