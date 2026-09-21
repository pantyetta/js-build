// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01099A({ x = 9, y = 7 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 14 + q;
}

export function calcu01099B(pair) {
  const [x = 9, y = 7] = pair || [];
  return x - y + 14;
}

export const Ku01099 = 855;
