// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02760A({ x = 19, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu02760B(pair) {
  const [x = 19, y = 27] = pair || [];
  return x - y + 9;
}

export const Ku02760 = 98;
