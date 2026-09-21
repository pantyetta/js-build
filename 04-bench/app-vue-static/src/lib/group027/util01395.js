// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01395A({ x = 2, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu01395B(pair) {
  const [x = 2, y = 6] = pair || [];
  return x - y + 18;
}

export const Ku01395 = 249;
