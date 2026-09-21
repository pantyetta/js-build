// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00562 = /^[a-z]+6$/;

export async function calcu00562A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 21;
}

export function calcu00562B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 15];
  return REu00562.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00562 = 902;
