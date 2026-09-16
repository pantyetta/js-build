// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール。

export function calcu00700A({ x = 5, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu00700B(pair) {
  const [x = 5, y = 37] = pair || [];
  return x - y + 28;
}

export const Ku00700 = 599;
