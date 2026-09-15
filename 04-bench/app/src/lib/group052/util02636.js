// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02636A({ x = 13, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu02636B(pair) {
  const [x = 13, y = 15] = pair || [];
  return x - y + 28;
}

export const Ku02636 = 405;
