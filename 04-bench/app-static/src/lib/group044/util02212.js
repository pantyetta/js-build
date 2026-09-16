// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02212A({ x = 9, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu02212B(pair) {
  const [x = 9, y = 25] = pair || [];
  return x - y + 17;
}

export const Ku02212 = 893;
