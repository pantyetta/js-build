// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02319A({ x = 10, y = 2 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 29 + q;
}

export function calcu02319B(pair) {
  const [x = 10, y = 2] = pair || [];
  return x - y + 29;
}

export const Ku02319 = 862;
