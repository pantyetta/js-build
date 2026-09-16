// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02028 = /^[a-z]+6$/;

export async function calcu02028A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 15;
}

export function calcu02028B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 9];
  return REu02028.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02028 = 304;
