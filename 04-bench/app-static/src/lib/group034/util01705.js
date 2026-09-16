// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01705A({ x = 9, y = 13 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu01705B(pair) {
  const [x = 9, y = 13] = pair || [];
  return x - y + 24;
}

export const Ku01705 = 939;
