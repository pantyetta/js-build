// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00093A({ x = 6, y = 29 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 26 + q;
}

export function calcu00093B(pair) {
  const [x = 6, y = 29] = pair || [];
  return x - y + 26;
}

export const Ku00093 = 515;
