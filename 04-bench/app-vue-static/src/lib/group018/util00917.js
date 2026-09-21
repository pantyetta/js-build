// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00917A({ x = 14, y = 36 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu00917B(pair) {
  const [x = 14, y = 36] = pair || [];
  return x - y + 24;
}

export const Ku00917 = 132;
