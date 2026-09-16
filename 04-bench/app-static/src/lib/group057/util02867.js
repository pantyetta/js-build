// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02867A({ x = 16, y = 19 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu02867B(pair) {
  const [x = 16, y = 19] = pair || [];
  return x - y + 27;
}

export const Ku02867 = 71;
