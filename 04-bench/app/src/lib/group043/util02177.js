// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02177A({ x = 14, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu02177B(pair) {
  const [x = 14, y = 30] = pair || [];
  return x - y + 16;
}

export const Ku02177 = 519;
