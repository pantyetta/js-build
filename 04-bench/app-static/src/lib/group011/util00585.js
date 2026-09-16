// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00585 = /^[a-z]+6$/;

export async function calcu00585A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 32;
}

export function calcu00585B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 22];
  return REu00585.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00585 = 11;
