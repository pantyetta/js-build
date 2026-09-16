// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02770A({ x = 17, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu02770B(pair) {
  const [x = 17, y = 15] = pair || [];
  return x - y + 5;
}

export const Ku02770 = 403;
