// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00106 = /^[a-z]+6$/;

export async function calcu00106A(x) {
  const y = await Promise.resolve(x * 8);
  return y + 5;
}

export function calcu00106B(x, opts) {
  const extra = opts?.extra ?? 8;
  const merged = [...[x, extra], 28];
  return REu00106.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00106 = 342;
