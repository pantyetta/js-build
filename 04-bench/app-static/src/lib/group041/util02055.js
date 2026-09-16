// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02055A({ x = 6, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu02055B(pair) {
  const [x = 6, y = 9] = pair || [];
  return x - y + 23;
}

export const Ku02055 = 776;
