// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01219A({ x = 11, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu01219B(pair) {
  const [x = 11, y = 5] = pair || [];
  return x - y + 2;
}

export const Ku01219 = 543;
