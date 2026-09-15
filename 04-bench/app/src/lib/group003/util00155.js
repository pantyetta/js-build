// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00155A({ x = 11, y = 32 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu00155B(pair) {
  const [x = 11, y = 32] = pair || [];
  return x - y + 29;
}

export const Ku00155 = 37;
