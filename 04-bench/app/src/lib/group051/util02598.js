// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02598A({ x = 10, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu02598B(pair) {
  const [x = 10, y = 37] = pair || [];
  return x - y + 6;
}

export const Ku02598 = 17;
