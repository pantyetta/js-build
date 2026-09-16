// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00358A({ x = 16, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu00358B(pair) {
  const [x = 16, y = 12] = pair || [];
  return x - y + 2;
}

export const Ku00358 = 638;
