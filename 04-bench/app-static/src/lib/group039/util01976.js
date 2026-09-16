// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01976A({ x = 6, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu01976B(pair) {
  const [x = 6, y = 6] = pair || [];
  return x - y + 17;
}

export const Ku01976 = 913;
