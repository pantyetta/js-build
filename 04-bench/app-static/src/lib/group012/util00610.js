// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 5 — import なしの葉モジュール。

const REu00610 = /^[a-z]+6$/;

export async function calcu00610A(x) {
  const y = await Promise.resolve(x * 13);
  return y + 30;
}

export function calcu00610B(x, opts) {
  const extra = opts?.extra ?? 13;
  const merged = [...[x, extra], 16];
  return REu00610.test("leaf") ? merged.length + x : merged.length - x;
}

export const Ku00610 = 511;
