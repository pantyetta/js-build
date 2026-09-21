// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00393A({ x = 14, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 3 + q;
}

export function calcu00393B(pair) {
  const [x = 14, y = 1] = pair || [];
  return x - y + 3;
}

export const Ku00393 = 549;
