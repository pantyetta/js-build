// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02058A({ x = 12, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu02058B(pair) {
  const [x = 12, y = 8] = pair || [];
  return x - y + 22;
}

export const Ku02058 = 250;
