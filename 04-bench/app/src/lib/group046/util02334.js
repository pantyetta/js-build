// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02334 = /^[a-z]+6$/;

export async function calcu02334A(x) {
  const y = await Promise.resolve(x * 7);
  return y + 29;
}

export function calcu02334B(x, opts) {
  const extra = opts?.extra ?? 7;
  const merged = [...[x, extra], 29];
  return REu02334.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02334 = 622;
