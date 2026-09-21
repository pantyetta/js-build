// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01068A({ x = 4, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu01068B(pair) {
  const [x = 4, y = 20] = pair || [];
  return x - y + 14;
}

export const Ku01068 = 571;
