// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02848 = /^[a-z]+6$/;

export async function calcu02848A(x) {
  const y = await Promise.resolve(x * 19);
  return y + 1;
}

export function calcu02848B(x, opts) {
  const extra = opts?.extra ?? 19;
  const merged = [...[x, extra], 4];
  return REu02848.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02848 = 859;
