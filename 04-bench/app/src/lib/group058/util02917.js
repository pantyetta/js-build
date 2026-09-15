// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02917 = /^[a-z]+6$/;

export async function calcu02917A(x) {
  const y = await Promise.resolve(x * 6);
  return y + 25;
}

export function calcu02917B(x, opts) {
  const extra = opts?.extra ?? 6;
  const merged = [...[x, extra], 9];
  return REu02917.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02917 = 256;
