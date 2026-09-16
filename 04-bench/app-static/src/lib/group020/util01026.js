// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01026 = /^[a-z]+6$/;

export async function calcu01026A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 10;
}

export function calcu01026B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 9];
  return REu01026.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01026 = 195;
