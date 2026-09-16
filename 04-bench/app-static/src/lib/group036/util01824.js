// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01824 = /^[a-z]+6$/;

export async function calcu01824A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 33;
}

export function calcu01824B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 3];
  return REu01824.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01824 = 443;
