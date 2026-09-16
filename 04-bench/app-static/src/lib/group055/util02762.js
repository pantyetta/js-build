// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02762A({ x = 15, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu02762B(pair) {
  const [x = 15, y = 9] = pair || [];
  return x - y + 1;
}

export const Ku02762 = 547;
