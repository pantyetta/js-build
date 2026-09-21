// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01259A({ x = 10, y = 13 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu01259B(pair) {
  const [x = 10, y = 13] = pair || [];
  return x - y + 24;
}

export const Ku01259 = 591;
