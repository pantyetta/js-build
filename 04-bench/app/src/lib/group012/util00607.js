// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00607A({ x = 10, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu00607B(pair) {
  const [x = 10, y = 5] = pair || [];
  return x - y + 20;
}

export const Ku00607 = 719;
