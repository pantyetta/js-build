// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00593 = /^[a-z]+6$/;

export async function calcu00593A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 30;
}

export function calcu00593B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 14];
  return REu00593.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00593 = 349;
