// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01650 = /^[a-z]+6$/;

export async function calcu01650A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 3;
}

export function calcu01650B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 5];
  return REu01650.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01650 = 178;
