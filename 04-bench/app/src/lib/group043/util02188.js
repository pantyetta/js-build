// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02188 = /^[a-z]+6$/;

export async function calcu02188A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 32;
}

export function calcu02188B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 17];
  return REu02188.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02188 = 546;
