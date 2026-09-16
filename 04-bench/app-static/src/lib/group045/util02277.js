// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02277A({ x = 13, y = 26 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu02277B(pair) {
  const [x = 13, y = 26] = pair || [];
  return x - y + 18;
}

export const Ku02277 = 573;
