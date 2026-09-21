// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01113A({ x = 2, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 15 + q;
}

export function calcu01113B(pair) {
  const [x = 2, y = 3] = pair || [];
  return x - y + 15;
}

export const Ku01113 = 173;
