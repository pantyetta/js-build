// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00086A({ x = 4, y = 31 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu00086B(pair) {
  const [x = 4, y = 31] = pair || [];
  return x - y + 18;
}

export const Ku00086 = 202;
