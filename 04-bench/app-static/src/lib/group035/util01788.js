// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01788A({ x = 3, y = 22 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu01788B(pair) {
  const [x = 3, y = 22] = pair || [];
  return x - y + 13;
}

export const Ku01788 = 483;
