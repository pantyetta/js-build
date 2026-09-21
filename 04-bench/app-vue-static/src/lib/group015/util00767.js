// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00767 = /^[a-z]+6$/;

export async function calcu00767A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 3;
}

export function calcu00767B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 5];
  return REu00767.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00767 = 181;
