// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01873A({ x = 8, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu01873B(pair) {
  const [x = 8, y = 28] = pair || [];
  return x - y + 4;
}

export const Ku01873 = 294;
