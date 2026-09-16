// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02129A({ x = 7, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 7 + q;
}

export function calcu02129B(pair) {
  const [x = 7, y = 37] = pair || [];
  return x - y + 7;
}

export const Ku02129 = 109;
