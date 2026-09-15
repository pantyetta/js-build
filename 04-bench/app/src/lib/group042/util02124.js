// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02124 = /^[a-z]+6$/;

export async function calcu02124A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 5;
}

export function calcu02124B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 18];
  return REu02124.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02124 = 875;
