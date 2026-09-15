// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02556A({ x = 10, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu02556B(pair) {
  const [x = 10, y = 25] = pair || [];
  return x - y + 20;
}

export const Ku02556 = 279;
