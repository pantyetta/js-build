// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01118 = /^[a-z]+6$/;

export async function calcu01118A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 12;
}

export function calcu01118B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 26];
  return REu01118.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01118 = 789;
