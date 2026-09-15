// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02461A({ x = 14, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu02461B(pair) {
  const [x = 14, y = 34] = pair || [];
  return x - y + 11;
}

export const Ku02461 = 663;
