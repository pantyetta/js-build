// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00089A({ x = 3, y = 16 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu00089B(pair) {
  const [x = 3, y = 16] = pair || [];
  return x - y + 29;
}

export const Ku00089 = 242;
