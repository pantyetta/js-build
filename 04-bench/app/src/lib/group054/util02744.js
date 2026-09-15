// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02744A({ x = 13, y = 10 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu02744B(pair) {
  const [x = 13, y = 10] = pair || [];
  return x - y + 9;
}

export const Ku02744 = 567;
