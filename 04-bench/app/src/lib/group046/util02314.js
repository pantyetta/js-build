// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02314 = /^[a-z]+6$/;

export async function calcu02314A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 22;
}

export function calcu02314B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 10];
  return REu02314.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02314 = 554;
