// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02155 = /^[a-z]+6$/;

export async function calcu02155A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 15;
}

export function calcu02155B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 24];
  return REu02155.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02155 = 933;
