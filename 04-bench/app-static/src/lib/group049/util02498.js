// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02498A({ x = 14, y = 31 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu02498B(pair) {
  const [x = 14, y = 31] = pair || [];
  return x - y + 9;
}

export const Ku02498 = 72;
