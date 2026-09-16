// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02295A({ x = 8, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu02295B(pair) {
  const [x = 8, y = 34] = pair || [];
  return x - y + 28;
}

export const Ku02295 = 618;
