// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02430A({ x = 15, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu02430B(pair) {
  const [x = 15, y = 29] = pair || [];
  return x - y + 15;
}

export const Ku02430 = 727;
