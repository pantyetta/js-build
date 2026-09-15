// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01608 = /^[a-z]+6$/;

export async function calcu01608A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 19;
}

export function calcu01608B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 10];
  return REu01608.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01608 = 48;
