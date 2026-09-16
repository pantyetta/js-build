// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02207A({ x = 11, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu02207B(pair) {
  const [x = 11, y = 1] = pair || [];
  return x - y + 27;
}

export const Ku02207 = 758;
