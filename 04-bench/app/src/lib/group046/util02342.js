// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02342A({ x = 7, y = 11 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu02342B(pair) {
  const [x = 7, y = 11] = pair || [];
  return x - y + 6;
}

export const Ku02342 = 310;
