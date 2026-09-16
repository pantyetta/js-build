// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02033 = /^[a-z]+6$/;

export async function calcu02033A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 35;
}

export function calcu02033B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 11];
  return REu02033.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02033 = 129;
