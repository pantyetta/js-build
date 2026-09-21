// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00006A({ x = 2, y = 25 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu00006B(pair) {
  const [x = 2, y = 25] = pair || [];
  return x - y + 16;
}

export const Ku00006 = 406;
