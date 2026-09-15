// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu02235 = /^[a-z]+6$/;

export async function calcu02235A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 23;
}

export function calcu02235B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 17];
  return REu02235.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku02235 = 190;
