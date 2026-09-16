// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02244A({ x = 15, y = 19 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu02244B(pair) {
  const [x = 15, y = 19] = pair || [];
  return x - y + 24;
}

export const Ku02244 = 845;
