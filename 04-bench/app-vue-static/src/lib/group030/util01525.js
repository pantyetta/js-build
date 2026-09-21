// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01525A({ x = 2, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu01525B(pair) {
  const [x = 2, y = 27] = pair || [];
  return x - y + 23;
}

export const Ku01525 = 492;
