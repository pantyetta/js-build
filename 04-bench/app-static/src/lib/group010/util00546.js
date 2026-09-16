// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00546 = /^[a-z]+6$/;

export async function calcu00546A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 11;
}

export function calcu00546B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 12];
  return REu00546.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00546 = 189;
