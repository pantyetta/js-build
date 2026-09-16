// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02361A({ x = 18, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu02361B(pair) {
  const [x = 18, y = 37] = pair || [];
  return x - y + 6;
}

export const Ku02361 = 160;
