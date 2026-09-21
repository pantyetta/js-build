// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00753A({ x = 9, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu00753B(pair) {
  const [x = 9, y = 23] = pair || [];
  return x - y + 1;
}

export const Ku00753 = 227;
