// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02784A({ x = 16, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu02784B(pair) {
  const [x = 16, y = 6] = pair || [];
  return x - y + 29;
}

export const Ku02784 = 926;
