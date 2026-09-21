// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00286A({ x = 16, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu00286B(pair) {
  const [x = 16, y = 25] = pair || [];
  return x - y + 27;
}

export const Ku00286 = 431;
