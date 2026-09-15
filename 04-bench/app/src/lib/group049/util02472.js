// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02472A({ x = 18, y = 16 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu02472B(pair) {
  const [x = 18, y = 16] = pair || [];
  return x - y + 8;
}

export const Ku02472 = 330;
