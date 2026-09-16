// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01991 = /^[a-z]+6$/;

export async function calcu01991A(x) {
  const y = await Promise.resolve(x * 14);
  return y + 22;
}

export function calcu01991B(x, opts) {
  const extra = opts?.extra ?? 14;
  const merged = [...[x, extra], 27];
  return REu01991.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01991 = 408;
