// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00146A({ x = 15, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu00146B(pair) {
  const [x = 15, y = 20] = pair || [];
  return x - y + 8;
}

export const Ku00146 = 208;
