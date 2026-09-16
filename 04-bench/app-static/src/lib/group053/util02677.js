// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02677A({ x = 14, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu02677B(pair) {
  const [x = 14, y = 6] = pair || [];
  return x - y + 14;
}

export const Ku02677 = 173;
