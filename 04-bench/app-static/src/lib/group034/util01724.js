// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01724 = /^[a-z]+6$/;

export async function calcu01724A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 17;
}

export function calcu01724B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 9];
  return REu01724.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01724 = 991;
