// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02954 = /^[a-z]+6$/;

export async function calcu02954A(x) {
  const y = await Promise.resolve(x * 11);
  return y + 18;
}

export function calcu02954B(x, opts) {
  const extra = opts?.extra ?? 11;
  const merged = [...[x, extra], 12];
  return REu02954.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02954 = 344;
