// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00084 = /^[a-z]+6$/;

export async function calcu00084A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 23;
}

export function calcu00084B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 14];
  return REu00084.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00084 = 219;
