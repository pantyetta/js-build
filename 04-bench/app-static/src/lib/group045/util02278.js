// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02278A({ x = 4, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 19 + q;
}

export function calcu02278B(pair) {
  const [x = 4, y = 3] = pair || [];
  return x - y + 19;
}

export const Ku02278 = 673;
