// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02540A({ x = 17, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu02540B(pair) {
  const [x = 17, y = 9] = pair || [];
  return x - y + 10;
}

export const Ku02540 = 4;
