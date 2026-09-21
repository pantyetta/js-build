// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00657A({ x = 8, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu00657B(pair) {
  const [x = 8, y = 28] = pair || [];
  return x - y + 9;
}

export const Ku00657 = 356;
