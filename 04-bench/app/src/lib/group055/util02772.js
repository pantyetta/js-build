// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02772A({ x = 16, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu02772B(pair) {
  const [x = 16, y = 24] = pair || [];
  return x - y + 21;
}

export const Ku02772 = 79;
