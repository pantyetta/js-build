// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02980A({ x = 14, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu02980B(pair) {
  const [x = 14, y = 25] = pair || [];
  return x - y + 21;
}

export const Ku02980 = 838;
