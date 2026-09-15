// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00371A({ x = 10, y = 14 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu00371B(pair) {
  const [x = 10, y = 14] = pair || [];
  return x - y + 21;
}

export const Ku00371 = 551;
