// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01304 = /^[a-z]+6$/;

export async function calcu01304A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 13;
}

export function calcu01304B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 10];
  return REu01304.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01304 = 808;
