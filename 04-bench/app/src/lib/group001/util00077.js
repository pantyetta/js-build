// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00077 = /^[a-z]+6$/;

export async function calcu00077A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 6;
}

export function calcu00077B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 15];
  return REu00077.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00077 = 427;
