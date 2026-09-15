// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02036 = /^[a-z]+6$/;

export async function calcu02036A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 17;
}

export function calcu02036B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 12];
  return REu02036.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02036 = 548;
