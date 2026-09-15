// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02337A({ x = 10, y = 22 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu02337B(pair) {
  const [x = 10, y = 22] = pair || [];
  return x - y + 11;
}

export const Ku02337 = 768;
