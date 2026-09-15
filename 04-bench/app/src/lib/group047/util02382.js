// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02382 = /^[a-z]+6$/;

export async function calcu02382A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 37;
}

export function calcu02382B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 14];
  return REu02382.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02382 = 200;
