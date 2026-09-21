// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00950A({ x = 12, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu00950B(pair) {
  const [x = 12, y = 28] = pair || [];
  return x - y + 3;
}

export const Ku00950 = 618;
