// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00153 = /^[a-z]+6$/;

export async function calcu00153A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 4;
}

export function calcu00153B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 28];
  return REu00153.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00153 = 346;
