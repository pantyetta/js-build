// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02900 = /^[a-z]+6$/;

export async function calcu02900A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 35;
}

export function calcu02900B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 13];
  return REu02900.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02900 = 901;
