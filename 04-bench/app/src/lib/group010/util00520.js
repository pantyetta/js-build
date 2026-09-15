// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00520A({ x = 8, y = 33 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu00520B(pair) {
  const [x = 8, y = 33] = pair || [];
  return x - y + 20;
}

export const Ku00520 = 66;
