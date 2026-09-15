// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02239 = /^[a-z]+6$/;

export async function calcu02239A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 30;
}

export function calcu02239B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 10];
  return REu02239.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02239 = 519;
