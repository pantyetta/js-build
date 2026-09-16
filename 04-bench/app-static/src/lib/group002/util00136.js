// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00136 = /^[a-z]+6$/;

export async function calcu00136A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 14;
}

export function calcu00136B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 24];
  return REu00136.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00136 = 33;
