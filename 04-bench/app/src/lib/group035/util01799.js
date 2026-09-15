// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01799A({ x = 17, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu01799B(pair) {
  const [x = 17, y = 27] = pair || [];
  return x - y + 3;
}

export const Ku01799 = 357;
