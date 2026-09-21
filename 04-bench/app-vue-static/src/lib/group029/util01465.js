// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01465A({ x = 15, y = 32 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 25 + q;
}

export function calcu01465B(pair) {
  const [x = 15, y = 32] = pair || [];
  return x - y + 25;
}

export const Ku01465 = 948;
