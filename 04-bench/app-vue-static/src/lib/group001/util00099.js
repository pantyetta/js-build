// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 3 — import なしの葉モジュール（Vue 非依存）。

export function calcu00099A({ x = 2, y = 12 } = {}) {
  const [p, q] = [x + y, x - y];
  return p * 1 + q;
}

export function calcu00099B(pair) {
  const [x = 2, y = 12] = pair || [];
  return x - y + 1;
}

export const Ku00099 = 921;
