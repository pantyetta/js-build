// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00349A({ x = 14, y = 15 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu00349B(pair) {
  const [x = 14, y = 15] = pair || [];
  return x - y + 17;
}

export const Ku00349 = 191;
