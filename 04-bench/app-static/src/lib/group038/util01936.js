// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01936A({ x = 8, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu01936B(pair) {
  const [x = 8, y = 9] = pair || [];
  return x - y + 10;
}

export const Ku01936 = 393;
