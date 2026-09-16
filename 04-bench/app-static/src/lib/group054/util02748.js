// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02748A({ x = 13, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu02748B(pair) {
  const [x = 13, y = 1] = pair || [];
  return x - y + 22;
}

export const Ku02748 = 59;
