// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02147A({ x = 3, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu02147B(pair) {
  const [x = 3, y = 34] = pair || [];
  return x - y + 4;
}

export const Ku02147 = 169;
