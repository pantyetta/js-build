// 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール（Vue 非依存）。

const REu00712 = /^[a-z]+6$/;

export async function calcu00712A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 13;
}

export function calcu00712B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 6];
  return REu00712.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00712 = 923;
