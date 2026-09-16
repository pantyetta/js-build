// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00558A({ x = 11, y = 32 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu00558B(pair) {
  const [x = 11, y = 32] = pair || [];
  return x - y + 4;
}

export const Ku00558 = 584;
