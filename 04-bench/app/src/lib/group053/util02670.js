// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02670A({ x = 14, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu02670B(pair) {
  const [x = 14, y = 6] = pair || [];
  return x - y + 16;
}

export const Ku02670 = 971;
