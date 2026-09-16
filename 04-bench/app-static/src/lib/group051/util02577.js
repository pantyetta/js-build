// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02577 = /^[a-z]+6$/;

export async function calcu02577A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 8;
}

export function calcu02577B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 24];
  return REu02577.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02577 = 67;
