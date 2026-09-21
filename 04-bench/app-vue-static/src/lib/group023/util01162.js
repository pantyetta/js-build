// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01162A({ x = 6, y = 16 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu01162B(pair) {
  const [x = 6, y = 16] = pair || [];
  return x - y + 27;
}

export const Ku01162 = 232;
