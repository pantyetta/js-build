// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00231A({ x = 17, y = 36 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu00231B(pair) {
  const [x = 17, y = 36] = pair || [];
  return x - y + 2;
}

export const Ku00231 = 189;
