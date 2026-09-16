// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02843 = /^[a-z]+6$/;

export async function calcu02843A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 13;
}

export function calcu02843B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 24];
  return REu02843.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02843 = 824;
