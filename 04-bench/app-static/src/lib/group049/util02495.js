// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02495A({ x = 17, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu02495B(pair) {
  const [x = 17, y = 30] = pair || [];
  return x - y + 8;
}

export const Ku02495 = 490;
