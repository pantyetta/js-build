// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00343 = /^[a-z]+6$/;

export async function calcu00343A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 14;
}

export function calcu00343B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 4];
  return REu00343.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00343 = 188;
