// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02803A({ x = 7, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu02803B(pair) {
  const [x = 7, y = 12] = pair || [];
  return x - y + 14;
}

export const Ku02803 = 368;
