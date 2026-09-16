// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02821 = /^[a-z]+6$/;

export async function calcu02821A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 25;
}

export function calcu02821B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 23];
  return REu02821.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02821 = 148;
