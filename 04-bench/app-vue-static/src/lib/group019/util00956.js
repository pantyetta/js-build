// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00956 = /^[a-z]+6$/;

export async function calcu00956A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 33;
}

export function calcu00956B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 11];
  return REu00956.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00956 = 786;
