// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00315A({ x = 17, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu00315B(pair) {
  const [x = 17, y = 30] = pair || [];
  return x - y + 16;
}

export const Ku00315 = 417;
