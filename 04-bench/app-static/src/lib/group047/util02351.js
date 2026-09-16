// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02351 = /^[a-z]+6$/;

export async function calcu02351A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 5;
}

export function calcu02351B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 24];
  return REu02351.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02351 = 488;
