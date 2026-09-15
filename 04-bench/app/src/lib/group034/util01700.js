// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01700A({ x = 5, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu01700B(pair) {
  const [x = 5, y = 23] = pair || [];
  return x - y + 15;
}

export const Ku01700 = 246;
