// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02175A({ x = 13, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu02175B(pair) {
  const [x = 13, y = 37] = pair || [];
  return x - y + 10;
}

export const Ku02175 = 331;
