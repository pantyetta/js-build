// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01221A({ x = 15, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 13 + q;
}

export function calcu01221B(pair) {
  const [x = 15, y = 34] = pair || [];
  return x - y + 13;
}

export const Ku01221 = 678;
