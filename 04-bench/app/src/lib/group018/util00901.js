// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00901 = /^[a-z]+6$/;

export async function calcu00901A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 18;
}

export function calcu00901B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 9];
  return REu00901.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00901 = 458;
