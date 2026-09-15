// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02750A({ x = 12, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu02750B(pair) {
  const [x = 12, y = 5] = pair || [];
  return x - y + 16;
}

export const Ku02750 = 698;
