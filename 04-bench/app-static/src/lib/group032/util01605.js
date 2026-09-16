// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01605 = /^[a-z]+6$/;

export async function calcu01605A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 24;
}

export function calcu01605B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 24];
  return REu01605.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01605 = 120;
