// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02820A({ x = 18, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu02820B(pair) {
  const [x = 18, y = 1] = pair || [];
  return x - y + 11;
}

export const Ku02820 = 482;
