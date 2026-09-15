// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02468A({ x = 15, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu02468B(pair) {
  const [x = 15, y = 37] = pair || [];
  return x - y + 4;
}

export const Ku02468 = 622;
