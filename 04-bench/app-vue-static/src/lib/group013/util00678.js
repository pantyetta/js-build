// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00678A({ x = 10, y = 23 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 25 + q;
}

export function calcu00678B(pair) {
  const [x = 10, y = 23] = pair || [];
  return x - y + 25;
}

export const Ku00678 = 28;
