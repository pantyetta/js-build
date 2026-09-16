// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02546A({ x = 16, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu02546B(pair) {
  const [x = 16, y = 5] = pair || [];
  return x - y + 15;
}

export const Ku02546 = 484;
