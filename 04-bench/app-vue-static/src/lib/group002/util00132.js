// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00132A({ x = 3, y = 28 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu00132B(pair) {
  const [x = 3, y = 28] = pair || [];
  return x - y + 11;
}

export const Ku00132 = 538;
