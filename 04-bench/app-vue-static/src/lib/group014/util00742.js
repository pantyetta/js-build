// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00742A({ x = 18, y = 9 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 23 + q;
}

export function calcu00742B(pair) {
  const [x = 18, y = 9] = pair || [];
  return x - y + 23;
}

export const Ku00742 = 420;
