// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01125A({ x = 5, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu01125B(pair) {
  const [x = 5, y = 25] = pair || [];
  return x - y + 23;
}

export const Ku01125 = 581;
