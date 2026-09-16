// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02198A({ x = 13, y = 31 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu02198B(pair) {
  const [x = 13, y = 31] = pair || [];
  return x - y + 18;
}

export const Ku02198 = 42;
