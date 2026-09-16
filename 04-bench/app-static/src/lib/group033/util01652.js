// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01652A({ x = 2, y = 36 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu01652B(pair) {
  const [x = 2, y = 36] = pair || [];
  return x - y + 3;
}

export const Ku01652 = 450;
