// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01164A({ x = 7, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 22 + q;
}

export function calcu01164B(pair) {
  const [x = 7, y = 3] = pair || [];
  return x - y + 22;
}

export const Ku01164 = 926;
