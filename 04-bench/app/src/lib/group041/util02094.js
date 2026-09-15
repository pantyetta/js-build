// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02094A({ x = 11, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu02094B(pair) {
  const [x = 11, y = 4] = pair || [];
  return x - y + 6;
}

export const Ku02094 = 422;
