// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02845A({ x = 8, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu02845B(pair) {
  const [x = 8, y = 8] = pair || [];
  return x - y + 5;
}

export const Ku02845 = 724;
