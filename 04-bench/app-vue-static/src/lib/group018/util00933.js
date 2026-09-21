// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00933A({ x = 6, y = 22 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 4 + q;
}

export function calcu00933B(pair) {
  const [x = 6, y = 22] = pair || [];
  return x - y + 4;
}

export const Ku00933 = 579;
