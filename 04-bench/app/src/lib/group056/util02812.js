// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02812A({ x = 13, y = 22 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu02812B(pair) {
  const [x = 13, y = 22] = pair || [];
  return x - y + 28;
}

export const Ku02812 = 475;
