// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02891A({ x = 10, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu02891B(pair) {
  const [x = 10, y = 6] = pair || [];
  return x - y + 26;
}

export const Ku02891 = 384;
