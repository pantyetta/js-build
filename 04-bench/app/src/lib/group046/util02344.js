// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02344A({ x = 18, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu02344B(pair) {
  const [x = 18, y = 3] = pair || [];
  return x - y + 4;
}

export const Ku02344 = 727;
