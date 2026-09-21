// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00218 = /^[a-z]+6$/;

export async function calcu00218A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 17;
}

export function calcu00218B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 10];
  return REu00218.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00218 = 399;
