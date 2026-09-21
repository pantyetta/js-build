// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00809 = /^[a-z]+6$/;

export async function calcu00809A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 8;
}

export function calcu00809B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 23];
  return REu00809.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00809 = 493;
