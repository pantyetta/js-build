// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01083A({ x = 3, y = 18 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu01083B(pair) {
  const [x = 3, y = 18] = pair || [];
  return x - y + 21;
}

export const Ku01083 = 406;
