// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01780 = /^[a-z]+6$/;

export async function calcu01780A(x) {
  const y = await Promise.resolve(x * 15);
  return y + 19;
}

export function calcu01780B(x, opts) {
  const extra = opts?.extra ?? 15;
  const merged = [...[x, extra], 5];
  return REu01780.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01780 = 239;
