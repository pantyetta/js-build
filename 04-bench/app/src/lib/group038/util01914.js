// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01914A({ x = 6, y = 2 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu01914B(pair) {
  const [x = 6, y = 2] = pair || [];
  return x - y + 27;
}

export const Ku01914 = 90;
