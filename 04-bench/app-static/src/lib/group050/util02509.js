// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02509A({ x = 2, y = 13 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu02509B(pair) {
  const [x = 2, y = 13] = pair || [];
  return x - y + 20;
}

export const Ku02509 = 344;
