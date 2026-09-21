// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00418A({ x = 17, y = 24 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 16 + q;
}

export function calcu00418B(pair) {
  const [x = 17, y = 24] = pair || [];
  return x - y + 16;
}

export const Ku00418 = 543;
