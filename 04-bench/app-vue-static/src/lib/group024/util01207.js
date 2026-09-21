// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01207A({ x = 13, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu01207B(pair) {
  const [x = 13, y = 29] = pair || [];
  return x - y + 18;
}

export const Ku01207 = 721;
