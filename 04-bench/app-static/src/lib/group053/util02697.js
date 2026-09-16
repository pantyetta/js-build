// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02697 = /^[a-z]+6$/;

export async function calcu02697A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 28;
}

export function calcu02697B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 19];
  return REu02697.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02697 = 487;
