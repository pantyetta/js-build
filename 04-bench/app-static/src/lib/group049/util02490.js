// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02490A({ x = 18, y = 14 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu02490B(pair) {
  const [x = 18, y = 14] = pair || [];
  return x - y + 14;
}

export const Ku02490 = 394;
