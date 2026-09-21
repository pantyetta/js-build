// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00675 = /^[a-z]+6$/;

export async function calcu00675A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 17;
}

export function calcu00675B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 5];
  return REu00675.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00675 = 70;
