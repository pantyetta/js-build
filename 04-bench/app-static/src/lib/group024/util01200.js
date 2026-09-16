// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01200A({ x = 12, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu01200B(pair) {
  const [x = 12, y = 25] = pair || [];
  return x - y + 18;
}

export const Ku01200 = 251;
