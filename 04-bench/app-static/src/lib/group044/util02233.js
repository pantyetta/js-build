// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02233A({ x = 13, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 19 + q;
}

export function calcu02233B(pair) {
  const [x = 13, y = 20] = pair || [];
  return x - y + 19;
}

export const Ku02233 = 767;
