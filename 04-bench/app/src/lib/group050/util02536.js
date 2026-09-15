// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02536A({ x = 10, y = 19 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu02536B(pair) {
  const [x = 10, y = 19] = pair || [];
  return x - y + 14;
}

export const Ku02536 = 282;
