// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02466 = /^[a-z]+6$/;

export async function calcu02466A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 12;
}

export function calcu02466B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 4];
  return REu02466.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02466 = 848;
