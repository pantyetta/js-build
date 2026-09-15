// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02619A({ x = 8, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu02619B(pair) {
  const [x = 8, y = 21] = pair || [];
  return x - y + 10;
}

export const Ku02619 = 688;
