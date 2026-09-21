// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00018A({ x = 4, y = 1 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 19 + q;
}

export function calcu00018B(pair) {
  const [x = 4, y = 1] = pair || [];
  return x - y + 19;
}

export const Ku00018 = 890;
