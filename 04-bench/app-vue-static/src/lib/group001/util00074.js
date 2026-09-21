// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00074A({ x = 19, y = 27 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu00074B(pair) {
  const [x = 19, y = 27] = pair || [];
  return x - y + 20;
}

export const Ku00074 = 269;
