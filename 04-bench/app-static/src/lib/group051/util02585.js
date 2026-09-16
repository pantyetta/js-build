// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02585 = /^[a-z]+6$/;

export async function calcu02585A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 26;
}

export function calcu02585B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 13];
  return REu02585.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02585 = 369;
