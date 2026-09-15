// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00580 = /^[a-z]+6$/;

export async function calcu00580A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 6;
}

export function calcu00580B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 9];
  return REu00580.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00580 = 417;
