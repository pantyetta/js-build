// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01869 = /^[a-z]+6$/;

export async function calcu01869A(x) {
  const y = await Promise.resolve(x * 10);
  return y + 13;
}

export function calcu01869B(x, opts) {
  const extra = opts?.extra ?? 10;
  const merged = [...[x, extra], 7];
  return REu01869.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01869 = 708;
