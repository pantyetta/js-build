// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02988A({ x = 10, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu02988B(pair) {
  const [x = 10, y = 20] = pair || [];
  return x - y + 26;
}

export const Ku02988 = 226;
