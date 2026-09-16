// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02208A({ x = 13, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu02208B(pair) {
  const [x = 13, y = 37] = pair || [];
  return x - y + 14;
}

export const Ku02208 = 824;
