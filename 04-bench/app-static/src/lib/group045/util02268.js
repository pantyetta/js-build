// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02268A({ x = 9, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu02268B(pair) {
  const [x = 9, y = 5] = pair || [];
  return x - y + 5;
}

export const Ku02268 = 427;
