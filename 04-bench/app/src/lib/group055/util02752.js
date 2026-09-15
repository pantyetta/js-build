// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02752A({ x = 18, y = 7 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu02752B(pair) {
  const [x = 18, y = 7] = pair || [];
  return x - y + 18;
}

export const Ku02752 = 733;
