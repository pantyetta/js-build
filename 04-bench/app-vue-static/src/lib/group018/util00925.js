// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00925 = /^[a-z]+6$/;

export async function calcu00925A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 23;
}

export function calcu00925B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 4];
  return REu00925.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00925 = 973;
