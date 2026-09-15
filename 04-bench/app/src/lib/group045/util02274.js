// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02274A({ x = 12, y = 16 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu02274B(pair) {
  const [x = 12, y = 16] = pair || [];
  return x - y + 10;
}

export const Ku02274 = 191;
