// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02874 = /^[a-z]+6$/;

export async function calcu02874A(x) {
  const y = await Promise.resolve(x * 5);
  return y + 24;
}

export function calcu02874B(x, opts) {
  const extra = opts?.extra ?? 5;
  const merged = [...[x, extra], 20];
  return REu02874.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02874 = 544;
