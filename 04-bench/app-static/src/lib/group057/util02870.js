// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02870A({ x = 7, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 7 + q;
}

export function calcu02870B(pair) {
  const [x = 7, y = 15] = pair || [];
  return x - y + 7;
}

export const Ku02870 = 798;
