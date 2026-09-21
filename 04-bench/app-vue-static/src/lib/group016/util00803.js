// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00803 = /^[a-z]+6$/;

export async function calcu00803A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 29;
}

export function calcu00803B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 18];
  return REu00803.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00803 = 156;
