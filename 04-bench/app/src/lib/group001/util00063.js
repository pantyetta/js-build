// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00063 = /^[a-z]+6$/;

export async function calcu00063A(x) {
  const y = await Promise.resolve(x * 12);
  return y + 22;
}

export function calcu00063B(x, opts) {
  const extra = opts?.extra ?? 12;
  const merged = [...[x, extra], 29];
  return REu00063.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00063 = 141;
