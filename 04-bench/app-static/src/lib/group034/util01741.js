// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01741A({ x = 3, y = 31 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu01741B(pair) {
  const [x = 3, y = 31] = pair || [];
  return x - y + 16;
}

export const Ku01741 = 382;
