// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01460 = /^[a-z]+6$/;

export async function calcu01460A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 1;
}

export function calcu01460B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 11];
  return REu01460.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01460 = 383;
