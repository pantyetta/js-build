// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02041A({ x = 19, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu02041B(pair) {
  const [x = 19, y = 23] = pair || [];
  return x - y + 2;
}

export const Ku02041 = 669;
