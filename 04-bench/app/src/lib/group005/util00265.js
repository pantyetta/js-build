// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00265 = /^[a-z]+6$/;

export async function calcu00265A(x) {
  const y = await Promise.resolve(x * 18);
  return y + 19;
}

export function calcu00265B(x, opts) {
  const extra = opts?.extra ?? 18;
  const merged = [...[x, extra], 9];
  return REu00265.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00265 = 842;
