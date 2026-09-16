// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02008A({ x = 5, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu02008B(pair) {
  const [x = 5, y = 4] = pair || [];
  return x - y + 11;
}

export const Ku02008 = 202;
