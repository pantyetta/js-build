// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00405A({ x = 19, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu00405B(pair) {
  const [x = 19, y = 29] = pair || [];
  return x - y + 3;
}

export const Ku00405 = 871;
