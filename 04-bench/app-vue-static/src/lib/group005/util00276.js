// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00276A({ x = 12, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu00276B(pair) {
  const [x = 12, y = 34] = pair || [];
  return x - y + 9;
}

export const Ku00276 = 391;
