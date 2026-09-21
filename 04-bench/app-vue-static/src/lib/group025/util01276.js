// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01276A({ x = 15, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu01276B(pair) {
  const [x = 15, y = 1] = pair || [];
  return x - y + 9;
}

export const Ku01276 = 416;
