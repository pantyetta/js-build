// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00127A({ x = 18, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu00127B(pair) {
  const [x = 18, y = 24] = pair || [];
  return x - y + 17;
}

export const Ku00127 = 768;
