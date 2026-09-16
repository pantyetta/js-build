// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02970A({ x = 9, y = 10 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 25 + q;
}

export function calcu02970B(pair) {
  const [x = 9, y = 10] = pair || [];
  return x - y + 25;
}

export const Ku02970 = 274;
