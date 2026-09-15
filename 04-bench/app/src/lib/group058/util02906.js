// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02906A({ x = 9, y = 7 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu02906B(pair) {
  const [x = 9, y = 7] = pair || [];
  return x - y + 1;
}

export const Ku02906 = 557;
