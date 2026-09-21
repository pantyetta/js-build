// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01066A({ x = 3, y = 22 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 10 + q;
}

export function calcu01066B(pair) {
  const [x = 3, y = 22] = pair || [];
  return x - y + 10;
}

export const Ku01066 = 648;
