// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00617A({ x = 2, y = 7 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu00617B(pair) {
  const [x = 2, y = 7] = pair || [];
  return x - y + 5;
}

export const Ku00617 = 44;
