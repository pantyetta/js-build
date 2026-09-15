// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02179A({ x = 6, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu02179B(pair) {
  const [x = 6, y = 3] = pair || [];
  return x - y + 29;
}

export const Ku02179 = 324;
