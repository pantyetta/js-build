// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02905A({ x = 11, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 19 + q;
}

export function calcu02905B(pair) {
  const [x = 11, y = 24] = pair || [];
  return x - y + 19;
}

export const Ku02905 = 645;
