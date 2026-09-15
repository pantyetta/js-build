// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01358A({ x = 19, y = 36 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu01358B(pair) {
  const [x = 19, y = 36] = pair || [];
  return x - y + 9;
}

export const Ku01358 = 116;
