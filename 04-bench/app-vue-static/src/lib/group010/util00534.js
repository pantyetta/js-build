// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00534A({ x = 4, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 27 + q;
}

export function calcu00534B(pair) {
  const [x = 4, y = 21] = pair || [];
  return x - y + 27;
}

export const Ku00534 = 721;
