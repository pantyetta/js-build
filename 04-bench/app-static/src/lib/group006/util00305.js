// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00305A({ x = 7, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu00305B(pair) {
  const [x = 7, y = 23] = pair || [];
  return x - y + 20;
}

export const Ku00305 = 321;
