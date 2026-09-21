// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00304A({ x = 5, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu00304B(pair) {
  const [x = 5, y = 37] = pair || [];
  return x - y + 14;
}

export const Ku00304 = 812;
