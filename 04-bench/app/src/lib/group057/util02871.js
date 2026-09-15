// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02871 = /^[a-z]+6$/;

export async function calcu02871A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 36;
}

export function calcu02871B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 3];
  return REu02871.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02871 = 886;
