// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01442A({ x = 5, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu01442B(pair) {
  const [x = 5, y = 28] = pair || [];
  return x - y + 26;
}

export const Ku01442 = 562;
