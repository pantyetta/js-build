// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00788 = /^[a-z]+6$/;

export async function calcu00788A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 4;
}

export function calcu00788B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 4];
  return REu00788.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00788 = 900;
