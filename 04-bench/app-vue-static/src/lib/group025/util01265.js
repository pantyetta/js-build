// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01265A({ x = 17, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu01265B(pair) {
  const [x = 17, y = 3] = pair || [];
  return x - y + 18;
}

export const Ku01265 = 304;
