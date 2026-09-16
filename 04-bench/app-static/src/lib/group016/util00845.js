// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00845A({ x = 19, y = 2 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu00845B(pair) {
  const [x = 19, y = 2] = pair || [];
  return x - y + 8;
}

export const Ku00845 = 140;
