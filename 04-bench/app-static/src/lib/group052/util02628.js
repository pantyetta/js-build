// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02628 = /^[a-z]+6$/;

export async function calcu02628A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 7;
}

export function calcu02628B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 16];
  return REu02628.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02628 = 334;
