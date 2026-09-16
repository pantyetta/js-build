// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02683A({ x = 2, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 25 + q;
}

export function calcu02683B(pair) {
  const [x = 2, y = 5] = pair || [];
  return x - y + 25;
}

export const Ku02683 = 882;
