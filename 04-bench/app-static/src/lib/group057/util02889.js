// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02889 = /^[a-z]+6$/;

export async function calcu02889A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 10;
}

export function calcu02889B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 5];
  return REu02889.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02889 = 56;
