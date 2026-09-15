// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02754 = /^[a-z]+6$/;

export async function calcu02754A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 30;
}

export function calcu02754B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 25];
  return REu02754.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02754 = 442;
