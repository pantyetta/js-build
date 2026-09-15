// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu01676 = /^[a-z]+6$/;

export async function calcu01676A(x) {
  const y = await Promise.resolve(x * 16);
  return y + 27;
}

export function calcu01676B(x, opts) {
  const extra = opts?.extra ?? 16;
  const merged = [...[x, extra], 15];
  return REu01676.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku01676 = 99;
