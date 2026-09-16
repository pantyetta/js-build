// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01816A({ x = 11, y = 35 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu01816B(pair) {
  const [x = 11, y = 35] = pair || [];
  return x - y + 21;
}

export const Ku01816 = 139;
