// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02911A({ x = 12, y = 18 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu02911B(pair) {
  const [x = 12, y = 18] = pair || [];
  return x - y + 23;
}

export const Ku02911 = 673;
