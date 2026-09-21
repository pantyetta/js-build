// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00529A({ x = 19, y = 20 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 2 + q;
}

export function calcu00529B(pair) {
  const [x = 19, y = 20] = pair || [];
  return x - y + 2;
}

export const Ku00529 = 790;
