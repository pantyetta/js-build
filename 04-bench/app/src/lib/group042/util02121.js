// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02121 = /^[a-z]+6$/;

export async function calcu02121A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 37;
}

export function calcu02121B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 26];
  return REu02121.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02121 = 443;
