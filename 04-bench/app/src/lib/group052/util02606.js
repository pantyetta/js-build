// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02606A({ x = 16, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 25 + q;
}

export function calcu02606B(pair) {
  const [x = 16, y = 4] = pair || [];
  return x - y + 25;
}

export const Ku02606 = 820;
