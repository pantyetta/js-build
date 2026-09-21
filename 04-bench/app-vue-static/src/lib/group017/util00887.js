// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00887A({ x = 15, y = 3 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu00887B(pair) {
  const [x = 15, y = 3] = pair || [];
  return x - y + 16;
}

export const Ku00887 = 20;
