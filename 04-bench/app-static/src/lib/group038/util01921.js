// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01921 = /^[a-z]+6$/;

export async function calcu01921A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 9;
}

export function calcu01921B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 8];
  return REu01921.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01921 = 688;
