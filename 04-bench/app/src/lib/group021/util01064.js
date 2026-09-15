// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01064 = /^[a-z]+6$/;

export async function calcu01064A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 13;
}

export function calcu01064B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 3];
  return REu01064.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01064 = 130;
