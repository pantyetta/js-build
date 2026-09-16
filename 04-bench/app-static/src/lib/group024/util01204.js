// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu01204A({ x = 11, y = 19 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu01204B(pair) {
  const [x = 11, y = 19] = pair || [];
  return x - y + 29;
}

export const Ku01204 = 145;
