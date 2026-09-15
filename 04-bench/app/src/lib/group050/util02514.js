// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02514 = /^[a-z]+6$/;

export async function calcu02514A(x) {
  const y = await Promise.resolve(x * 2);
  return y + 25;
}

export function calcu02514B(x, opts) {
  const extra = opts?.extra ?? 2;
  const merged = [...[x, extra], 6];
  return REu02514.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02514 = 979;
