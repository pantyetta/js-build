// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu01409 = /^[a-z]+6$/;

export async function calcu01409A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 30;
}

export function calcu01409B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 17];
  return REu01409.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01409 = 545;
