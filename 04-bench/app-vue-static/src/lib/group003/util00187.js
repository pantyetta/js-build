// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00187A({ x = 12, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu00187B(pair) {
  const [x = 12, y = 28] = pair || [];
  return x - y + 10;
}

export const Ku00187 = 448;
