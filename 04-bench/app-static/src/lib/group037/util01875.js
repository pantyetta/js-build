// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01875 = /^[a-z]+6$/;

export async function calcu01875A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 31;
}

export function calcu01875B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 21];
  return REu01875.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01875 = 73;
