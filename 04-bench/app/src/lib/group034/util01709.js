// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01709A({ x = 7, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu01709B(pair) {
  const [x = 7, y = 4] = pair || [];
  return x - y + 27;
}

export const Ku01709 = 851;
