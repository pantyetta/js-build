// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00205A({ x = 8, y = 17 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu00205B(pair) {
  const [x = 8, y = 17] = pair || [];
  return x - y + 3;
}

export const Ku00205 = 827;
