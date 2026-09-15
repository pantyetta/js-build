// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01996 = /^[a-z]+6$/;

export async function calcu01996A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 32;
}

export function calcu01996B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 24];
  return REu01996.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01996 = 251;
