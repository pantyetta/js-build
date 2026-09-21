// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00621A({ x = 6, y = 33 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 8 + q;
}

export function calcu00621B(pair) {
  const [x = 6, y = 33] = pair || [];
  return x - y + 8;
}

export const Ku00621 = 825;
