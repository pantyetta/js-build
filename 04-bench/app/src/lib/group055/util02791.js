// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02791A({ x = 12, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu02791B(pair) {
  const [x = 12, y = 3] = pair || [];
  return x - y + 16;
}

export const Ku02791 = 821;
