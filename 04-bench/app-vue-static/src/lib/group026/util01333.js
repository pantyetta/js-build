// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01333A({ x = 13, y = 37 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 17 + q;
}

export function calcu01333B(pair) {
  const [x = 13, y = 37] = pair || [];
  return x - y + 17;
}

export const Ku01333 = 669;
