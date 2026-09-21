// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00631 = /^[a-z]+6$/;

export async function calcu00631A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 25;
}

export function calcu00631B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 7];
  return REu00631.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00631 = 972;
