// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01683A({ x = 5, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu01683B(pair) {
  const [x = 5, y = 28] = pair || [];
  return x - y + 1;
}

export const Ku01683 = 374;
