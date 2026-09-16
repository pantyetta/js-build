// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02979 = /^[a-z]+6$/;

export async function calcu02979A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 20;
}

export function calcu02979B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 2];
  return REu02979.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02979 = 442;
