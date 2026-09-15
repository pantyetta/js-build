// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02599A({ x = 8, y = 11 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu02599B(pair) {
  const [x = 8, y = 11] = pair || [];
  return x - y + 26;
}

export const Ku02599 = 826;
