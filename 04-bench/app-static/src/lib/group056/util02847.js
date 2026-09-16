// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02847A({ x = 16, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu02847B(pair) {
  const [x = 16, y = 21] = pair || [];
  return x - y + 11;
}

export const Ku02847 = 420;
