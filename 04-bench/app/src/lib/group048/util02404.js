// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02404A({ x = 3, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu02404B(pair) {
  const [x = 3, y = 8] = pair || [];
  return x - y + 2;
}

export const Ku02404 = 810;
