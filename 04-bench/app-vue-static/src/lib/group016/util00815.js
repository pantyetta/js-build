// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00815A({ x = 8, y = 14 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 19 + q;
}

export function calcu00815B(pair) {
  const [x = 8, y = 14] = pair || [];
  return x - y + 19;
}

export const Ku00815 = 722;
