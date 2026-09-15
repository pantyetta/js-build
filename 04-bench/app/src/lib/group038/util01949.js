// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01949A({ x = 11, y = 18 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu01949B(pair) {
  const [x = 11, y = 18] = pair || [];
  return x - y + 22;
}

export const Ku01949 = 132;
