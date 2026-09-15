// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02388A({ x = 13, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu02388B(pair) {
  const [x = 13, y = 9] = pair || [];
  return x - y + 13;
}

export const Ku02388 = 133;
