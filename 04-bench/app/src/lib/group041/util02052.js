// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02052A({ x = 10, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu02052B(pair) {
  const [x = 10, y = 1] = pair || [];
  return x - y + 10;
}

export const Ku02052 = 32;
