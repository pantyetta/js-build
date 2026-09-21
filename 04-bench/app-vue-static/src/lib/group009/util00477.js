// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00477A({ x = 3, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu00477B(pair) {
  const [x = 3, y = 6] = pair || [];
  return x - y + 27;
}

export const Ku00477 = 227;
