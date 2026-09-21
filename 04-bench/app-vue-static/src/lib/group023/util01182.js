// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01182A({ x = 15, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu01182B(pair) {
  const [x = 15, y = 23] = pair || [];
  return x - y + 23;
}

export const Ku01182 = 721;
