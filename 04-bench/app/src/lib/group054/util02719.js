// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02719A({ x = 13, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu02719B(pair) {
  const [x = 13, y = 15] = pair || [];
  return x - y + 2;
}

export const Ku02719 = 963;
