// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00022A({ x = 12, y = 6 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 6 + q;
}

export function calcu00022B(pair) {
  const [x = 12, y = 6] = pair || [];
  return x - y + 6;
}

export const Ku00022 = 743;
