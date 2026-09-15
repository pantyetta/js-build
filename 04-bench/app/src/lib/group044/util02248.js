// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02248 = /^[a-z]+6$/;

export async function calcu02248A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 20;
}

export function calcu02248B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 24];
  return REu02248.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02248 = 579;
