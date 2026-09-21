// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00369 = /^[a-z]+6$/;

export async function calcu00369A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 7;
}

export function calcu00369B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 16];
  return REu00369.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00369 = 924;
