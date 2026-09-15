// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01317A({ x = 10, y = 33 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu01317B(pair) {
  const [x = 10, y = 33] = pair || [];
  return x - y + 4;
}

export const Ku01317 = 829;
