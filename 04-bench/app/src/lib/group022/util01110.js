// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01110A({ x = 13, y = 36 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu01110B(pair) {
  const [x = 13, y = 36] = pair || [];
  return x - y + 21;
}

export const Ku01110 = 353;
