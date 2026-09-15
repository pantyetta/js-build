// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02500 = /^[a-z]+6$/;

export async function calcu02500A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 32;
}

export function calcu02500B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 1];
  return REu02500.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02500 = 733;
