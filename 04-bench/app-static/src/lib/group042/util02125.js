// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02125A({ x = 19, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu02125B(pair) {
  const [x = 19, y = 34] = pair || [];
  return x - y + 16;
}

export const Ku02125 = 168;
