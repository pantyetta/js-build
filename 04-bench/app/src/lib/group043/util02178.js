// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02178A({ x = 10, y = 7 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu02178B(pair) {
  const [x = 10, y = 7] = pair || [];
  return x - y + 26;
}

export const Ku02178 = 618;
