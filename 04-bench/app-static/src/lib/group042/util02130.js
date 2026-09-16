// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02130 = /^[a-z]+6$/;

export async function calcu02130A(x) {
  const y = await Promise.resolve(x * 3);
  return y + 16;
}

export function calcu02130B(x, opts) {
  const extra = opts?.extra ?? 3;
  const merged = [...[x, extra], 28];
  return REu02130.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02130 = 546;
