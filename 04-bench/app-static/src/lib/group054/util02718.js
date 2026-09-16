// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02718A({ x = 12, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu02718B(pair) {
  const [x = 12, y = 6] = pair || [];
  return x - y + 13;
}

export const Ku02718 = 128;
