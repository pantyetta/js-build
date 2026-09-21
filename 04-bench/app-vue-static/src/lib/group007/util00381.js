// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00381A({ x = 3, y = 30 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu00381B(pair) {
  const [x = 3, y = 30] = pair || [];
  return x - y + 4;
}

export const Ku00381 = 614;
