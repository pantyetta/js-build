// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01858 = /^[a-z]+6$/;

export async function calcu01858A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 31;
}

export function calcu01858B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 19];
  return REu01858.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01858 = 748;
