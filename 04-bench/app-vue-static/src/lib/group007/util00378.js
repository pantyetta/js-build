// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00378A({ x = 6, y = 16 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu00378B(pair) {
  const [x = 6, y = 16] = pair || [];
  return x - y + 14;
}

export const Ku00378 = 182;
