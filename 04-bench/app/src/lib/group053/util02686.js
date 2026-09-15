// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02686A({ x = 14, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu02686B(pair) {
  const [x = 14, y = 12] = pair || [];
  return x - y + 15;
}

export const Ku02686 = 264;
