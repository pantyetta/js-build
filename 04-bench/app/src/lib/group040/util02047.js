// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02047A({ x = 6, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu02047B(pair) {
  const [x = 6, y = 27] = pair || [];
  return x - y + 2;
}

export const Ku02047 = 772;
