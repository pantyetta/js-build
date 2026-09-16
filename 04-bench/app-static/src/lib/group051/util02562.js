// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02562A({ x = 7, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu02562B(pair) {
  const [x = 7, y = 15] = pair || [];
  return x - y + 15;
}

export const Ku02562 = 39;
