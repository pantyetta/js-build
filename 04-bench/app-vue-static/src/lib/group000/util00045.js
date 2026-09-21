// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00045 = /^[a-z]+6$/;

export async function calcu00045A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 27;
}

export function calcu00045B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 22];
  return REu00045.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00045 = 416;
