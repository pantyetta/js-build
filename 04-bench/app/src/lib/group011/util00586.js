// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00586A({ x = 19, y = 36 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu00586B(pair) {
  const [x = 19, y = 36] = pair || [];
  return x - y + 17;
}

export const Ku00586 = 570;
