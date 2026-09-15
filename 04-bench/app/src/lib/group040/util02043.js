// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02043 = /^[a-z]+6$/;

export async function calcu02043A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 9;
}

export function calcu02043B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 27];
  return REu02043.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02043 = 564;
