// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01493A({ x = 6, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 28 + q;
}

export function calcu01493B(pair) {
  const [x = 6, y = 5] = pair || [];
  return x - y + 28;
}

export const Ku01493 = 196;
