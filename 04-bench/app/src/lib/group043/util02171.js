// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02171A({ x = 16, y = 13 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu02171B(pair) {
  const [x = 16, y = 13] = pair || [];
  return x - y + 18;
}

export const Ku02171 = 261;
