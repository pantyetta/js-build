// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02139A({ x = 8, y = 33 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu02139B(pair) {
  const [x = 8, y = 33] = pair || [];
  return x - y + 10;
}

export const Ku02139 = 473;
