// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00866A({ x = 16, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu00866B(pair) {
  const [x = 16, y = 28] = pair || [];
  return x - y + 10;
}

export const Ku00866 = 150;
