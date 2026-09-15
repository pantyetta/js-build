// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00875A({ x = 6, y = 17 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu00875B(pair) {
  const [x = 6, y = 17] = pair || [];
  return x - y + 8;
}

export const Ku00875 = 96;
