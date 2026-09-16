// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02131 = /^[a-z]+6$/;

export async function calcu02131A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 10;
}

export function calcu02131B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 16];
  return REu02131.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02131 = 333;
