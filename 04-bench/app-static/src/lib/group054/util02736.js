// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02736A({ x = 3, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu02736B(pair) {
  const [x = 3, y = 37] = pair || [];
  return x - y + 8;
}

export const Ku02736 = 627;
