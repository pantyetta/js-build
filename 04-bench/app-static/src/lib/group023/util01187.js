// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01187A({ x = 17, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu01187B(pair) {
  const [x = 17, y = 21] = pair || [];
  return x - y + 21;
}

export const Ku01187 = 421;
