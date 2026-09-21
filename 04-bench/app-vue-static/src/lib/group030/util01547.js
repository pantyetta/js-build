// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01547A({ x = 19, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu01547B(pair) {
  const [x = 19, y = 15] = pair || [];
  return x - y + 5;
}

export const Ku01547 = 118;
