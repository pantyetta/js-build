// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00299 = /^[a-z]+6$/;

export async function calcu00299A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 8;
}

export function calcu00299B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 6];
  return REu00299.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00299 = 602;
