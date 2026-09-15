// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02640A({ x = 5, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu02640B(pair) {
  const [x = 5, y = 9] = pair || [];
  return x - y + 24;
}

export const Ku02640 = 348;
