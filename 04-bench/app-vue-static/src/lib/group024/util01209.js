// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01209A({ x = 8, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu01209B(pair) {
  const [x = 8, y = 9] = pair || [];
  return x - y + 9;
}

export const Ku01209 = 855;
