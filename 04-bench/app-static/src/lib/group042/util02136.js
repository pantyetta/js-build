// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02136A({ x = 3, y = 11 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 7 + q;
}

export function calcu02136B(pair) {
  const [x = 3, y = 11] = pair || [];
  return x - y + 7;
}

export const Ku02136 = 610;
