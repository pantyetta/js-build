// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00452A({ x = 10, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu00452B(pair) {
  const [x = 10, y = 8] = pair || [];
  return x - y + 6;
}

export const Ku00452 = 436;
