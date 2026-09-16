// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02138A({ x = 11, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu02138B(pair) {
  const [x = 11, y = 30] = pair || [];
  return x - y + 27;
}

export const Ku02138 = 555;
