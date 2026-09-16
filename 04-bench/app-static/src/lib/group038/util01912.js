// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01912A({ x = 9, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu01912B(pair) {
  const [x = 9, y = 27] = pair || [];
  return x - y + 22;
}

export const Ku01912 = 103;
