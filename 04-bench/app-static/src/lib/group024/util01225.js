// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01225A({ x = 10, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu01225B(pair) {
  const [x = 10, y = 37] = pair || [];
  return x - y + 5;
}

export const Ku01225 = 988;
