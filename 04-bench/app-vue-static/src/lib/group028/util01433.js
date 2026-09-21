// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01433A({ x = 2, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu01433B(pair) {
  const [x = 2, y = 5] = pair || [];
  return x - y + 14;
}

export const Ku01433 = 470;
