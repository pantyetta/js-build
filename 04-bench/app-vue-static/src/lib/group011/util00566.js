// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00566A({ x = 16, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu00566B(pair) {
  const [x = 16, y = 4] = pair || [];
  return x - y + 18;
}

export const Ku00566 = 713;
