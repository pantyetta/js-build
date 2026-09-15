// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02478A({ x = 6, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu02478B(pair) {
  const [x = 6, y = 1] = pair || [];
  return x - y + 5;
}

export const Ku02478 = 734;
