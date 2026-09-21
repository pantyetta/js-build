// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00583 = /^[a-z]+6$/;

export async function calcu00583A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 11;
}

export function calcu00583B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 20];
  return REu00583.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00583 = 468;
