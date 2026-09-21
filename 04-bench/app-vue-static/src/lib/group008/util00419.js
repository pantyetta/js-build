// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00419A({ x = 19, y = 34 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu00419B(pair) {
  const [x = 19, y = 34] = pair || [];
  return x - y + 24;
}

export const Ku00419 = 42;
