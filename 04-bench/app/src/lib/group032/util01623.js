// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01623 = /^[a-z]+6$/;

export async function calcu01623A(x) {
  const y = await Promise.resolve(x * 9);
  return y + 3;
}

export function calcu01623B(x, opts) {
  const extra = opts?.extra ?? 9;
  const merged = [...[x, extra], 18];
  return REu01623.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01623 = 791;
