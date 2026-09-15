// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02715A({ x = 13, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu02715B(pair) {
  const [x = 13, y = 4] = pair || [];
  return x - y + 5;
}

export const Ku02715 = 660;
