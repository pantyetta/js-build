// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02364A({ x = 3, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu02364B(pair) {
  const [x = 3, y = 20] = pair || [];
  return x - y + 15;
}

export const Ku02364 = 56;
