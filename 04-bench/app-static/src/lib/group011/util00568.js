// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00568 = /^[a-z]+6$/;

export async function calcu00568A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 6;
}

export function calcu00568B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 6];
  return REu00568.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00568 = 334;
