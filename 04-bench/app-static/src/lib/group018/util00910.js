// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00910 = /^[a-z]+6$/;

export async function calcu00910A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 2;
}

export function calcu00910B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 21];
  return REu00910.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00910 = 324;
