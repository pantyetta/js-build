// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02294A({ x = 17, y = 26 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu02294B(pair) {
  const [x = 17, y = 26] = pair || [];
  return x - y + 21;
}

export const Ku02294 = 102;
