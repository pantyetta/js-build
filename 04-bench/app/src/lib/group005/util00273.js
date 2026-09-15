// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00273 = /^[a-z]+6$/;

export async function calcu00273A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 19;
}

export function calcu00273B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 23];
  return REu00273.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00273 = 629;
