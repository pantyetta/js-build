// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01563A({ x = 16, y = 33 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 11 + q;
}

export function calcu01563B(pair) {
  const [x = 16, y = 33] = pair || [];
  return x - y + 11;
}

export const Ku01563 = 441;
