// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00567A({ x = 12, y = 5 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu00567B(pair) {
  const [x = 12, y = 5] = pair || [];
  return x - y + 20;
}

export const Ku00567 = 832;
