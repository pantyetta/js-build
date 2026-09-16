// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01035A({ x = 10, y = 35 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu01035B(pair) {
  const [x = 10, y = 35] = pair || [];
  return x - y + 9;
}

export const Ku01035 = 402;
