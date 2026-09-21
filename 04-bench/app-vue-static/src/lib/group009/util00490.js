// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00490A({ x = 19, y = 33 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu00490B(pair) {
  const [x = 19, y = 33] = pair || [];
  return x - y + 1;
}

export const Ku00490 = 685;
