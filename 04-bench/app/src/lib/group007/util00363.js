// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00363A({ x = 17, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu00363B(pair) {
  const [x = 17, y = 37] = pair || [];
  return x - y + 21;
}

export const Ku00363 = 212;
