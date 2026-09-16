// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00367A({ x = 9, y = 2 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu00367B(pair) {
  const [x = 9, y = 2] = pair || [];
  return x - y + 1;
}

export const Ku00367 = 464;
