// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00760A({ x = 11, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu00760B(pair) {
  const [x = 11, y = 8] = pair || [];
  return x - y + 21;
}

export const Ku00760 = 856;
