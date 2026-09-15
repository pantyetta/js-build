// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02223 = /^[a-z]+6$/;

export async function calcu02223A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 22;
}

export function calcu02223B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 3];
  return REu02223.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02223 = 677;
