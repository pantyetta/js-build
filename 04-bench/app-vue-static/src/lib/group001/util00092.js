// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00092A({ x = 11, y = 33 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu00092B(pair) {
  const [x = 11, y = 33] = pair || [];
  return x - y + 5;
}

export const Ku00092 = 229;
