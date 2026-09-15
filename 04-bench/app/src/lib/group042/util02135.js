// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02135A({ x = 14, y = 2 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu02135B(pair) {
  const [x = 14, y = 2] = pair || [];
  return x - y + 26;
}

export const Ku02135 = 837;
