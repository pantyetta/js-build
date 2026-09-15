// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01367A({ x = 7, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu01367B(pair) {
  const [x = 7, y = 27] = pair || [];
  return x - y + 4;
}

export const Ku01367 = 348;
