// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00277A({ x = 4, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu00277B(pair) {
  const [x = 4, y = 23] = pair || [];
  return x - y + 21;
}

export const Ku00277 = 699;
