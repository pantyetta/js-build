// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01523A({ x = 10, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu01523B(pair) {
  const [x = 10, y = 20] = pair || [];
  return x - y + 22;
}

export const Ku01523 = 411;
