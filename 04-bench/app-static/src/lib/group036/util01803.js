// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01803 = /^[a-z]+6$/;

export async function calcu01803A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 23;
}

export function calcu01803B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 1];
  return REu01803.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01803 = 807;
