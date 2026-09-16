// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00614A({ x = 19, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu00614B(pair) {
  const [x = 19, y = 6] = pair || [];
  return x - y + 27;
}

export const Ku00614 = 292;
