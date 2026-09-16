// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02089A({ x = 17, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu02089B(pair) {
  const [x = 17, y = 15] = pair || [];
  return x - y + 17;
}

export const Ku02089 = 414;
