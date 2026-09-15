// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02948A({ x = 5, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu02948B(pair) {
  const [x = 5, y = 24] = pair || [];
  return x - y + 8;
}

export const Ku02948 = 123;
