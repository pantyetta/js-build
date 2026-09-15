// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00119A({ x = 16, y = 19 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 7 + q;
}

export function calcu00119B(pair) {
  const [x = 16, y = 19] = pair || [];
  return x - y + 7;
}

export const Ku00119 = 30;
