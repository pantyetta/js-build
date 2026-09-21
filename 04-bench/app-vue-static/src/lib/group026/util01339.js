// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01339A({ x = 18, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 24 + q;
}

export function calcu01339B(pair) {
  const [x = 18, y = 21] = pair || [];
  return x - y + 24;
}

export const Ku01339 = 156;
