// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02793A({ x = 19, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu02793B(pair) {
  const [x = 19, y = 20] = pair || [];
  return x - y + 1;
}

export const Ku02793 = 412;
