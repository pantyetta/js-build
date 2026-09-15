// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00535A({ x = 6, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu00535B(pair) {
  const [x = 6, y = 8] = pair || [];
  return x - y + 11;
}

export const Ku00535 = 981;
