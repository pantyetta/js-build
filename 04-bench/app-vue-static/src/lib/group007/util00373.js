// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00373 = /^[a-z]+6$/;

export async function calcu00373A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 33;
}

export function calcu00373B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 18];
  return REu00373.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00373 = 289;
