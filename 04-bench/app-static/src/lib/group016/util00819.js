// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00819 = /^[a-z]+6$/;

export async function calcu00819A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 27;
}

export function calcu00819B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 6];
  return REu00819.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00819 = 633;
