// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02081 = /^[a-z]+6$/;

export async function calcu02081A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 36;
}

export function calcu02081B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 21];
  return REu02081.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02081 = 402;
