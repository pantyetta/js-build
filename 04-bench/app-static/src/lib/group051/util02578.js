// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02578A({ x = 17, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu02578B(pair) {
  const [x = 17, y = 34] = pair || [];
  return x - y + 3;
}

export const Ku02578 = 520;
