// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02173A({ x = 12, y = 33 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu02173B(pair) {
  const [x = 12, y = 33] = pair || [];
  return x - y + 9;
}

export const Ku02173 = 479;
