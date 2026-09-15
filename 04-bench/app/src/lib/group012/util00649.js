// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00649 = /^[a-z]+6$/;

export async function calcu00649A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 7;
}

export function calcu00649B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 6];
  return REu00649.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00649 = 747;
