// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00949A({ x = 11, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 5 + q;
}

export function calcu00949B(pair) {
  const [x = 11, y = 9] = pair || [];
  return x - y + 5;
}

export const Ku00949 = 333;
