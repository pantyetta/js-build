// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00345 = /^[a-z]+6$/;

export async function calcu00345A(x) {
  const y = await Promise.resolve(x * 17);
  return y + 2;
}

export function calcu00345B(x, opts) {
  const extra = opts?.extra ?? 17;
  const merged = [...[x, extra], 2];
  return REu00345.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00345 = 154;
