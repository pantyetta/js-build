// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00795A({ x = 12, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 25 + q;
}

export function calcu00795B(pair) {
  const [x = 12, y = 1] = pair || [];
  return x - y + 25;
}

export const Ku00795 = 834;
