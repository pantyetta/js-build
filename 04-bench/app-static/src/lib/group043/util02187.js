// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02187A({ x = 13, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu02187B(pair) {
  const [x = 13, y = 12] = pair || [];
  return x - y + 27;
}

export const Ku02187 = 77;
