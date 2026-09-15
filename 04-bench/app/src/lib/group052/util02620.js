// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02620A({ x = 8, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu02620B(pair) {
  const [x = 8, y = 9] = pair || [];
  return x - y + 11;
}

export const Ku02620 = 555;
