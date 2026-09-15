// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00459A({ x = 7, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 19 + q;
}

export function calcu00459B(pair) {
  const [x = 7, y = 4] = pair || [];
  return x - y + 19;
}

export const Ku00459 = 663;
