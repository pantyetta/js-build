// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02116A({ x = 7, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu02116B(pair) {
  const [x = 7, y = 8] = pair || [];
  return x - y + 23;
}

export const Ku02116 = 464;
