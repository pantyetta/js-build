// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02856A({ x = 10, y = 18 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu02856B(pair) {
  const [x = 10, y = 18] = pair || [];
  return x - y + 15;
}

export const Ku02856 = 277;
