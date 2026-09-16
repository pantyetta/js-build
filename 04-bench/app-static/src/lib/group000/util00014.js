// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00014 = /^[a-z]+6$/;

export async function calcu00014A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 10;
}

export function calcu00014B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 27];
  return REu00014.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00014 = 373;
