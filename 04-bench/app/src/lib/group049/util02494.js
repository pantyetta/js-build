// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02494A({ x = 10, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu02494B(pair) {
  const [x = 10, y = 28] = pair || [];
  return x - y + 1;
}

export const Ku02494 = 747;
