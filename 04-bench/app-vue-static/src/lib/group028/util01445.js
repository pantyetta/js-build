// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu01445A({ x = 17, y = 21 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 18 + q;
}

export function calcu01445B(pair) {
  const [x = 17, y = 21] = pair || [];
  return x - y + 18;
}

export const Ku01445 = 432;
