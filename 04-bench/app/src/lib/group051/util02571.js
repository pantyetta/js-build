// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02571A({ x = 18, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 12 + q;
}

export function calcu02571B(pair) {
  const [x = 18, y = 3] = pair || [];
  return x - y + 12;
}

export const Ku02571 = 871;
