// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu02700A({ x = 7, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu02700B(pair) {
  const [x = 7, y = 12] = pair || [];
  return x - y + 28;
}

export const Ku02700 = 189;
