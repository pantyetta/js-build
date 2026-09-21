// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01370A({ x = 13, y = 17 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 19 + q;
}

export function calcu01370B(pair) {
  const [x = 13, y = 17] = pair || [];
  return x - y + 19;
}

export const Ku01370 = 138;
