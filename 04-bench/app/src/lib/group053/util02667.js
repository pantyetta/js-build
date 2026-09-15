// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02667 = /^[a-z]+6$/;

export async function calcu02667A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 1;
}

export function calcu02667B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 3];
  return REu02667.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02667 = 216;
