// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01344A({ x = 7, y = 8 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu01344B(pair) {
  const [x = 7, y = 8] = pair || [];
  return x - y + 1;
}

export const Ku01344 = 633;
