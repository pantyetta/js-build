// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02405A({ x = 18, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu02405B(pair) {
  const [x = 18, y = 28] = pair || [];
  return x - y + 11;
}

export const Ku02405 = 162;
