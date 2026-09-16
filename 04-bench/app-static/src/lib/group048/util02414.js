// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02414A({ x = 18, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu02414B(pair) {
  const [x = 18, y = 24] = pair || [];
  return x - y + 28;
}

export const Ku02414 = 221;
