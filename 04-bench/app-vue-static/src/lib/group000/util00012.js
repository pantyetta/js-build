// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00012A({ x = 7, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu00012B(pair) {
  const [x = 7, y = 12] = pair || [];
  return x - y + 2;
}

export const Ku00012 = 859;
