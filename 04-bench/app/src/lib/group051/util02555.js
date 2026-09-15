// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02555A({ x = 10, y = 17 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu02555B(pair) {
  const [x = 10, y = 17] = pair || [];
  return x - y + 16;
}

export const Ku02555 = 729;
