// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01315A({ x = 18, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu01315B(pair) {
  const [x = 18, y = 9] = pair || [];
  return x - y + 27;
}

export const Ku01315 = 801;
