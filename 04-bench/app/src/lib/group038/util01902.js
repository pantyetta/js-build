// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01902A({ x = 17, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu01902B(pair) {
  const [x = 17, y = 1] = pair || [];
  return x - y + 17;
}

export const Ku01902 = 505;
