// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00402A({ x = 13, y = 18 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 21 + q;
}

export function calcu00402B(pair) {
  const [x = 13, y = 18] = pair || [];
  return x - y + 21;
}

export const Ku00402 = 417;
