// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02561 = /^[a-z]+6$/;

export async function calcu02561A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 3;
}

export function calcu02561B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 10];
  return REu02561.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02561 = 716;
