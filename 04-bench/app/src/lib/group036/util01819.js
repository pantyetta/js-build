// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01819 = /^[a-z]+6$/;

export async function calcu01819A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 3;
}

export function calcu01819B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 19];
  return REu01819.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01819 = 181;
