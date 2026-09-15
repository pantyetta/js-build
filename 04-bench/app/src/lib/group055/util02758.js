// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02758A({ x = 16, y = 16 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu02758B(pair) {
  const [x = 16, y = 16] = pair || [];
  return x - y + 21;
}

export const Ku02758 = 779;
