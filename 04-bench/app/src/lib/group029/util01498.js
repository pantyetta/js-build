// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01498A({ x = 10, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu01498B(pair) {
  const [x = 10, y = 5] = pair || [];
  return x - y + 5;
}

export const Ku01498 = 542;
