// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02665A({ x = 15, y = 17 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 7 + q;
}

export function calcu02665B(pair) {
  const [x = 15, y = 17] = pair || [];
  return x - y + 7;
}

export const Ku02665 = 91;
