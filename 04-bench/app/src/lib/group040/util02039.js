// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02039 = /^[a-z]+6$/;

export async function calcu02039A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 10;
}

export function calcu02039B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 25];
  return REu02039.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02039 = 635;
