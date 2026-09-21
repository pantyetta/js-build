// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00868A({ x = 10, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 9 + q;
}

export function calcu00868B(pair) {
  const [x = 10, y = 20] = pair || [];
  return x - y + 9;
}

export const Ku00868 = 806;
