// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01411A({ x = 9, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu01411B(pair) {
  const [x = 9, y = 3] = pair || [];
  return x - y + 4;
}

export const Ku01411 = 974;
