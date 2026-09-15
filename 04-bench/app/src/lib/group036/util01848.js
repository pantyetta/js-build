// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01848A({ x = 5, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu01848B(pair) {
  const [x = 5, y = 25] = pair || [];
  return x - y + 22;
}

export const Ku01848 = 409;
