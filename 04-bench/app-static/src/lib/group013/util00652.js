// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00652 = /^[a-z]+6$/;

export async function calcu00652A(x) {
  const y = await Promise.resolve(x * 4);
  return y + 27;
}

export function calcu00652B(x, opts) {
  const extra = opts?.extra ?? 4;
  const merged = [...[x, extra], 10];
  return REu00652.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00652 = 519;
