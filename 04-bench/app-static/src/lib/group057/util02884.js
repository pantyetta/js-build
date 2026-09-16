// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02884A({ x = 17, y = 35 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu02884B(pair) {
  const [x = 17, y = 35] = pair || [];
  return x - y + 3;
}

export const Ku02884 = 873;
