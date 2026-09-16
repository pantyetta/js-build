// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02777A({ x = 2, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu02777B(pair) {
  const [x = 2, y = 30] = pair || [];
  return x - y + 2;
}

export const Ku02777 = 730;
