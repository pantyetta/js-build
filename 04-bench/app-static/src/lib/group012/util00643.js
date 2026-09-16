// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00643A({ x = 15, y = 7 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu00643B(pair) {
  const [x = 15, y = 7] = pair || [];
  return x - y + 29;
}

export const Ku00643 = 305;
