// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00376A({ x = 10, y = 13 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu00376B(pair) {
  const [x = 10, y = 13] = pair || [];
  return x - y + 23;
}

export const Ku00376 = 597;
