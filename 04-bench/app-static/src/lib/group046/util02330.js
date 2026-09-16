// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02330A({ x = 13, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu02330B(pair) {
  const [x = 13, y = 1] = pair || [];
  return x - y + 9;
}

export const Ku02330 = 209;
