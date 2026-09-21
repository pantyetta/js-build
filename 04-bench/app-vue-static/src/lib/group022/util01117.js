// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01117A({ x = 14, y = 4 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 20 + q;
}

export function calcu01117B(pair) {
  const [x = 14, y = 4] = pair || [];
  return x - y + 20;
}

export const Ku01117 = 428;
