// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01775 = /^[a-z]+6$/;

export async function calcu01775A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 23;
}

export function calcu01775B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 6];
  return REu01775.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01775 = 688;
