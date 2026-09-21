// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01106A({ x = 10, y = 31 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu01106B(pair) {
  const [x = 10, y = 31] = pair || [];
  return x - y + 23;
}

export const Ku01106 = 362;
