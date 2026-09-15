// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02001A({ x = 6, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu02001B(pair) {
  const [x = 6, y = 15] = pair || [];
  return x - y + 26;
}

export const Ku02001 = 865;
