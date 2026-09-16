// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02930 = /^[a-z]+6$/;

export async function calcu02930A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 3;
}

export function calcu02930B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 29];
  return REu02930.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02930 = 402;
