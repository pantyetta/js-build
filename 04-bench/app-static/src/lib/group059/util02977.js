// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02977 = /^[a-z]+6$/;

export async function calcu02977A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 3;
}

export function calcu02977B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 15];
  return REu02977.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02977 = 452;
