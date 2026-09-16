// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01634 = /^[a-z]+6$/;

export async function calcu01634A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 16;
}

export function calcu01634B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 9];
  return REu01634.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01634 = 833;
