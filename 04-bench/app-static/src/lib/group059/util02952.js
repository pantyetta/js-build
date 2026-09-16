// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02952A({ x = 12, y = 32 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu02952B(pair) {
  const [x = 12, y = 32] = pair || [];
  return x - y + 14;
}

export const Ku02952 = 310;
